import DownloadButton from "../islands/DownloadButton.tsx";

interface DownloadCardProps {
  id: string;
  title?: string;
  imageName?: string;
  description?: string;
  downloadLink?: string;
  downloadSize?: number;
  downloadLink2?: string | null;
  downloadSize2?: number;
  updateDate?: string;
  latestVersion?: string;
  isExternal?: boolean;
}

const DownloadCard = ({
  id = "default",
  title = "OS Name",
  imageName = "linux",
  description = "Some basic description",
  downloadLink = "https://github.com/Raspirus/Raspirus/",
  downloadSize = 0,
  downloadLink2 = null,
  downloadSize2 = 0,
  updateDate = "0",
  latestVersion = "v2.0.0",
  isExternal = false,
}: DownloadCardProps) => {
  const getFileExtension = (url: string) =>
    url.substring(url.lastIndexOf("/") + 1).split(".").pop();

  const displayExtension = (url: string) => {
    if (url.endsWith("/")) {
      return "Download";
    }
    const extension = getFileExtension(url)?.toLowerCase();
    const isDeb = extension === "deb";
    const isArm64 = url.includes("arm64");
    const isAmd64 = url.includes("amd64");

    if (isDeb && !isAmd64) {
      if (isArm64) {
        return "ARM64";
      } else {
        return "ARMHF";
      }
    } else {
      return extension?.toUpperCase() || "UNKNOWN";
    }
  };

  return (
    <div class="m-5 p-5 border-solid border-2 border-gray-600 rounded-lg divide-y divide-gray-800 ring-1 ring-gray-800 
    shadow bg-gray-900" id={id}>
      <div class="header mb-2">
        <h1 class="text-2xl font-bold">{title}</h1>
      </div>
      <div class="flex flex-row py-2">
        <div class="w-1/3 mb-2">
          <img src={`/img/${imageName}`} alt="OS Logo Image" class="h-32" />
        </div>
        <div class="w-2/3 p-4">
          <p class="text-lg">{description}</p>
        </div>
      </div>
      <div class="footer flex flex-row justify-between pt-2">
        <div class="flex flex-col hidden md:flex">
          <p class="text-xs">Last Update: {updateDate}</p>
          <p class="text-xs">Latest Version: {latestVersion}</p>
        </div>
        <div class="flex flex-row">
          <DownloadButton
            link={downloadLink}
            size={downloadSize}
            isExternal={isExternal}
            displayExtension={displayExtension}
          />
          {downloadLink2 && (
            <DownloadButton
              link={downloadLink2}
              size={downloadSize2}
              isExternal={false}
              displayExtension={displayExtension}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DownloadCard;
