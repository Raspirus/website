import type { Handlers, PageProps } from "$fresh/server.ts";
import DownloadCard from "../components/DownloadCard.tsx";

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

export const handler: Handlers<GithubData> = {
  async GET(_req, ctx) {
    try {
      const resp = await fetch(
        "https://api.github.com/repos/Raspirus/Raspirus/releases",
      );
      if (resp.status === 404) {
        console.error("GitHub Repo not found");
        return new Response("GitHub Repo not found", { status: 404 });
      }
      if (resp.status === 403) {
        console.error("Rate limit exceeded");
        return new Response("Rate limit exceeded", { status: 403 });
      }
      const json_res = await resp.json();
      const gdata = {
        date: new Date(json_res[0].published_at),
        version: json_res[0].tag_name,
        win_link: json_res[0].assets.find((asset: Asset) =>
          asset.name.endsWith(".exe")
        )?.browser_download_url ?? "",
        win_size: json_res[0].assets.find((asset: Asset) =>
          asset.name.endsWith(".exe")
        )?.size ?? 0,
        win_msi_link: json_res[0].assets.find((asset: Asset) =>
          asset.name.endsWith(".msi")
        )?.browser_download_url ?? "",
        win_msi_size: json_res[0].assets.find((asset: Asset) =>
          asset.name.endsWith(".msi")
        )?.size ?? 0,
        mac_link: json_res[0].assets.find((asset: Asset) =>
          asset.name.endsWith(".dmg")
        )?.browser_download_url ?? "",
        mac_size: json_res[0].assets.find((asset: Asset) =>
          asset.name.endsWith(".dmg")
        )?.size ?? 0,
        linux_link: json_res[0].assets.find((asset: Asset) =>
          asset.name.endsWith(".AppImage")
        )?.browser_download_url ?? "",
        linux_size: json_res[0].assets.find((asset: Asset) =>
          asset.name.endsWith(".AppImage")
        )?.size ?? 0,
        linux_deb_arm64_link: json_res[0].assets.find((asset: Asset) =>
          asset.name.includes("_arm64.deb")
        )?.browser_download_url ?? "",
        linux_deb_arm64_size: json_res[0].assets.find((asset: Asset) =>
          asset.name.includes("_arm64.deb")
        )?.size ?? 0,
        linux_deb_armhf_link: json_res[0].assets.find((asset: Asset) =>
          asset.name.includes("_armhf.deb")
        )?.browser_download_url ?? "",
        linux_deb_armhf_size: json_res[0].assets.find((asset: Asset) =>
          asset.name.includes("_armhf.deb")
        )?.size ?? 0,
        linux_deb_amd_link: json_res[0].assets.find((asset: Asset) =>
          asset.name.endsWith("_amd64.deb")
        )?.browser_download_url ?? "",
        linux_deb_amd_size: json_res[0].assets.find((asset: Asset) =>
          asset.name.endsWith("_amd64.deb")
        )?.size ?? 0,
      };
      return ctx.render(gdata);
    } catch (err) {
      console.error(err);
      return new Response("Internal Server Error", { status: 500 });
    }
  },
};

const Download = (props: PageProps<GithubData>) => {
  const githubData = props.data;
  const day = githubData?.date.getDate().toString();
  const month = (githubData?.date.getMonth() ?? 0) + 1 + " ";
  const year = githubData?.date.getFullYear().toString();
  const data = githubData;
  let formattedDate: string = "0";

  if (day !== undefined && month !== undefined && year !== undefined) {
    formattedDate = `${day?.padStart(2, "0")}-${
      month.padStart(2, "0")
    }-${year}`;
  }

  return (
    <div>
      <h1 class="text-center text-4xl font-bold p-4">Downloads</h1>
      <h2 class="text-2xl font-bold p-2 pl-10">GitHub Downloads:</h2>
      <p class="text-lg p-2 pl-10">
        The following downloads are hosted on GitHub, you can also find them on
        the
        <a
          href="https://github.com/Raspirus/Raspirus/releases"
          target="_blank"
          class="text-mainred-500 ml-1"
        >
          GitHub Releases Page
        </a>. They are automatically tested and built by GitHub Actions.
      </p>

      <DownloadCard
        id="windows"
        title="Windows"
        imageName="windows.png"
        description="On Windows, Raspirus is available as a .exe and .msi installer. You can choose between the two,
          but we recommend the .msi installer. Tested on Windows 11, but should work on older versions too"
        downloadLink={data?.win_link}
        downloadSize={data?.win_size}
        downloadLink2={data?.win_msi_link}
        downloadSize2={data?.win_msi_size}
        updateDate={formattedDate}
        latestVersion={data?.version}
      />
      <DownloadCard
        id="macos"
        title="macOS"
        imageName="apple.png"
        description="On macOS, Raspirus is available as a .dmg installer. Unfortunately, we don't have an Apple device to test it on, 
          but it should work fine. If you have any problems, please let us know."
        downloadLink={data?.mac_link}
        downloadSize={data?.mac_size}
        updateDate={formattedDate}
        latestVersion={data?.version}
      />
      <DownloadCard
        id="linux"
        title="Debian/Linux (AMD 64)"
        imageName="linux.png"
        description="On Debian-based Linux distributions, Raspirus is available as a .deb installer and as an AppImage. Generally speaking,
          the .deb installer is recommended, but if you have any problems with it, you can try the AppImage. The AppImage is a single file that
          you can run without installing it. Tested on Ubuntu 20.04, but should work on other Debian-based distributions too."
        downloadLink={data?.linux_deb_amd_link}
        downloadSize={data?.linux_deb_amd_size}
        downloadLink2={data?.linux_link}
        downloadSize2={data?.linux_size}
        updateDate={formattedDate}
        latestVersion={data?.version}
      />
      <DownloadCard
        id="raspberrypi"
        title="Raspberry Pi"
        imageName="raspberrypi.png"
        description="On Raspberry Pi, we offer two deb packages, one for ARM64 and one for ARMHF. If you don't know which one to choose,
          you can run the following command in the terminal: 'uname -m'. If the output is 'aarch64', you should choose the ARM64 package,
          if the output is 'armv7l', you should choose the ARMHF package. Tested on Raspbian OS, but should work on other ARM-based distributions too."
        downloadLink={data?.linux_deb_arm64_link}
        downloadSize={data?.linux_deb_arm64_size}
        downloadLink2={data?.linux_deb_armhf_link}
        downloadSize2={data?.linux_deb_armhf_size}
        updateDate={formattedDate}
        latestVersion={data?.version}
      />
      <h2 id="external-downloads" class="text-2xl font-bold p-2 pl-10">
        External Downloads:
      </h2>
      <p class="text-lg p-2 pl-10">
        The following downloads are hosted on external websites, depending on
        your situation, they might be more convenient for you. They are not
        automatically tested and built by GitHub Actions, so they might be
        outdated. We recommend checking the version number on the GitHub
        Releases Page before downloading.
      </p>

      <DownloadCard
        id="chocolatey"
        title="Chocolatey (Windows)"
        imageName="chocolatey.png"
        description="Chocolatey is a package manager for Windows. If you have Chocolatey installed, you can install Raspirus with the following command:
          'choco install raspirus'."
        downloadLink="https://community.chocolatey.org/packages/raspirus/"
        downloadSize={0}
        updateDate="Not provided"
        latestVersion="v1.2.0"
        isExternal={true}
      />

      <DownloadCard
        id="arch"
        title="Arch (AUR)"
        imageName="arch.png"
        description="For all the Arch enthusiasts out there, Raspirus is provided trough the AUR (Arch User Repository)"
        downloadLink="https://aur.archlinux.org/packages/raspirus/"
        downloadSize={0}
        updateDate="Not provided"
        latestVersion="v1.1.3"
        isExternal={true}
      />

      <DownloadCard
        id="snapstore"
        title="Snap Store (Linux)"
        imageName="snapcraft.png"
        description="Snap is a package manager for Linux. If you have Snap installed, you can install Raspirus with the following command:
          'sudo snap install raspirus'."
        downloadLink="https://snapcraft.io/raspirus/"
        downloadSize={0}
        updateDate="Not provided"
        latestVersion="v1.2.0"
        isExternal={true}
      />

      <DownloadCard
        id="sourceforge"
        title="SourceForge"
        imageName="sourceforge.png"
        description="SourceForge is a website that hosts open-source software. You can find Raspirus on SourceForge, but we don't recommend downloading it from there.
          The downloads on SourceForge are not automatically updated, so they might be outdated. We recommend downloading Raspirus from GitHub instead."
        downloadLink="https://sourceforge.net/projects/raspirus/"
        downloadSize={0}
        updateDate="Not provided"
        latestVersion="v1.2.0"
        isExternal={true}
      />
    </div>
  );
};

export default Download;
