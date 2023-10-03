import Download from "../components/Download.tsx";
import Header from "../components/Header.tsx";
import Navbar from "../components/Navbar.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

interface Asset {
  name: string;
  size: number;
  browser_download_url: string;
}

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
  linux_deb_arm64_link: string;
  linux_deb_arm64_size: number;
  linux_deb_armhf_link: string;
  linux_deb_armhf_size: number;
  linux_deb_amd_link: string;
  linux_deb_amd_size: number;
}

export const handler: Handlers<GithubData | null> = {
  async GET(_: any, ctx: { render: (arg0: GithubData | null) => any; }) {
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
      // Extract data for different architectures
      const gdata: GithubData = {
        date: new Date(json_res[0].published_at),
        version: json_res[0].tag_name,
        // EXE
        win_link: json_res[0].assets.find(asset => asset.name.endsWith(".exe"))?.browser_download_url ?? "",
        win_size: json_res[0].assets.find(asset => asset.name.endsWith(".exe"))?.size ?? 0,
        // MSI
        win_msi_link: json_res[0].assets.find(asset => asset.name.endsWith(".msi"))?.browser_download_url ?? "",
        win_msi_size: json_res[0].assets.find(asset => asset.name.endsWith(".msi"))?.size ?? 0,
        // DMG
        mac_link: json_res[0].assets.find(asset => asset.name.endsWith(".dmg"))?.browser_download_url ?? "",
        mac_size: json_res[0].assets.find(asset => asset.name.endsWith(".dmg"))?.size ?? 0,
        // APPIMAGE
        linux_link: json_res[0].assets.find(asset => asset.name.endsWith(".AppImage"))?.browser_download_url ?? "",
        linux_size: json_res[0].assets.find(asset => asset.name.endsWith(".AppImage"))?.size ?? 0,
        // ARM 64
        linux_deb_arm64_link: json_res[0].assets.find(asset => asset.name.includes("_arm64.deb"))?.browser_download_url ?? "",
        linux_deb_arm64_size: json_res[0].assets.find(asset => asset.name.includes("_arm64.deb"))?.size ?? 0,
        // ARM HF
        linux_deb_armhf_link: json_res[0].assets.find(asset => asset.name.includes("_armhf.deb"))?.browser_download_url ?? "",
        linux_deb_armhf_size: json_res[0].assets.find(asset => asset.name.includes("_armhf.deb"))?.size ?? 0,
        // AMD 64
        linux_deb_amd_link: json_res[0].assets.find(asset => asset.name.endsWith("_amd64.deb"))?.browser_download_url ?? "",
        linux_deb_amd_size: json_res[0].assets.find(asset => asset.name.endsWith("_amd64.deb"))?.size ?? 0,
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
        class="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat bg-default"
      >
        <Navbar active="/downloads" />
        <div class="flex flex-wrap justify-center items-center flex-1">
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
            title="Debian/Linux (AMD 64)"
            image="img/linux.png"
            desc={desc}
            action={data?.linux_deb_amd_link ?? ""}
            size={data?.linux_deb_amd_size ?? 0}
            action2={data?.linux_link ?? ""}
            size2={data?.linux_size ?? 0}
          />
          <Download
            title="Raspberry Pi"
            image="img/raspberrypi.png"
            desc={desc}
            action={data?.linux_deb_arm64_link ?? ""}
            size={data?.linux_deb_arm64_size ?? 0}
            action2={data?.linux_deb_armhf_link ?? ""}
            size2={data?.linux_deb_armhf_size ?? 0}
          />
          {/* Add more Download components for other architectures if needed */}
        </div>
      </div>
    </>
  );
}
