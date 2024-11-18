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
    <a
      className="font-bold py-2 px-4 mr-4 bg-maingreen-600 text-white rounded flex items-center"
      href={link}
      target={isExternal ? "_blank" : "_self"}
    >
      {!isExternal
        ? <IconDownload class="w-6 h-6 mr-2" />
        : <IconExternalLink class="w-6 h-6 mr-2" />}
      {displayExtension(link)}{" "}
      {size === 0 ? "" : `- ${(size / 1048576).toFixed(2)}MB`}
    </a>
  );
};

export default DownloadButton;
