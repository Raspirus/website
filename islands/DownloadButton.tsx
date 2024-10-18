import { IconDownload, IconExternalLink } from "npm:@tabler/icons-preact";

interface DownloadButtonProps {
  link: string;
  size: number;
  isExternal: boolean;
  displayExtension: (url: string) => string;
}

const DownloadButton = (
  { link, size, isExternal, displayExtension }: DownloadButtonProps,
) => {
  return (
    <button
      className="font-bold py-2 px-4 mr-4 bg-maingreen-600 text-white rounded flex items-center"
      onClick={() => globalThis.location.href = link}
    >
      {!isExternal
        ? <IconDownload class="w-6 h-6" />
        : <IconExternalLink class="w-6 h-6" />}
      {displayExtension(link)}{" "}
      {size === 0 ? "" : `- ${(size / 1048576).toFixed(2)}MB`}
    </button>
  );
};

export default DownloadButton;
