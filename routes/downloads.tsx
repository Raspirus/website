import Download from "../components/Download.tsx";
import Header from "../components/Header.tsx";
import Navbar from "../components/Navbar.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

interface GithubData {
  date: Date;
  version: string;
  win_link: string;
  win_size: number;
  win_msi_link: string;
  win_msi_size: number;
  mac_link: string;
  mac_size: number;
  linux_link: string;
  linux_size: number;
  linux_deb_link: string;
  linux_deb_size: number;
  raspberry_link: string;
  raspberry_size: number;
}
// TODO: Fix Github Rate limit with personal auth token
export const handler: Handlers<GithubData | null> = {
  async GET(_, ctx) {
    const resp = await fetch(
      "https://api.github.com/repos/Raspirus/Raspirus/releases",
    );
    if (resp.status === 404) {
      console.error("GitHub Repo not found");
      return ctx.render(null);
    }
    if (resp.status === 403) {
      console.error("Rate limit exceeded");
      return ctx.render(null);
    }
    const json_res = await resp.json();
    try {
      const gdata: GithubData = {
        date: new Date(json_res[0].published_at),
        version: json_res[0].tag_name,
        win_link: json_res[0].assets[3].browser_download_url,
        win_size: json_res[0].assets[3].size,
        win_msi_link: json_res[0].assets[5].browser_download_url,
        win_msi_size: json_res[0].assets[5].size,
        mac_link: json_res[0].assets[4].browser_download_url,
        mac_size: json_res[0].assets[4].size,
        linux_link: json_res[0].assets[0].browser_download_url,
        linux_size: json_res[0].assets[0].size,
        linux_deb_link: json_res[0].assets[1].browser_download_url,
        linux_deb_size: json_res[0].assets[1].size,
        raspberry_link: json_res[0].assets[2].browser_download_url,
        raspberry_size: json_res[0].assets[2].size,
      };
      return ctx.render(gdata);
    } catch (err) {
      return ctx.render(null);
    }
  },
};

export default function Downloads({ data }: PageProps<GithubData | null>) {
  const day = data?.date.getDate().toString();
  const month = (data?.date.getMonth() ?? 0) + 1 + ""; // Months are zero-based, so add 1
  const year = data?.date.getFullYear().toString();

  const formattedDate = `${day?.padStart(2, "0")}-${
    month.padStart(2, "0")
  }-${year}`;

  const desc = `Version: ${data?.version}\nDate: ${formattedDate}`;
  return (
    <>
      <Header title="Downloads | Raspirus" />
      <div
        itemScope
        itemType="https://schema.org/SoftwareApplication"
        class="min-h-screen bg-cover bg-center bg-no-repeat bg-default"
      >
        <Navbar active="/downloads" />
        <div class="flex flex-wrap">
          <Download
            title="Windows"
            image="img/windows.png"
            desc={desc}
            action={data?.win_link ?? ""}
            size={data?.win_size ?? 0}
            action2={data?.win_msi_link ?? ""}
            size2={data?.win_msi_size ?? 0}
          />
          <Download
            title="macOS"
            image="img/apple.png"
            desc={desc}
            action={data?.mac_link ?? ""}
            size={data?.mac_size ?? 0}
            action2={null}
            size2={null}
          />
          <Download
            title="Debian/Linux"
            image="img/linux.png"
            desc={desc}
            action={data?.linux_link ?? ""}
            size={data?.linux_size ?? 0}
            action2={data?.linux_deb_link ?? ""}
            size2={data?.linux_deb_size ?? 0}
          />
          <Download
            title="Raspberry Pi (ARM 64)"
            image="img/raspberrypi.png"
            desc={desc}
            action={data?.raspberry_link ?? ""}
            size={data?.raspberry_size ?? 0}
            action2={null}
            size2={null}
          />
        </div>
      </div>
    </>
  );
}
