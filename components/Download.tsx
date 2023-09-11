type Downloadprops = {
  title: string;
  image: string;
  desc: string;
  action: string;
  size: number;
  action2: string | null;
  size2: number | null;
};

export default function Download({
  title,
  image,
  desc,
  action,
  size,
  action2,
  size2,
}: Downloadprops) {
  const getFileExtension = (url: string) =>
    url.substring(url.lastIndexOf("/") + 1).split(".").pop();

  const displayExtension = (url: string) => {
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
      return extension?.toUpperCase();
    }
  };

  return (
    <div class="p-8 w-full md:w-1/2 lg:w-1/4 h-1/4 md:h-1/2 lg:h-full flex flex-col justify-center items-center">
      <img src={image} alt="OS System Image" class="h-48" />

      <h1 itemProp="operatingSystem" class="mt-2">
        <b>{title}</b>
      </h1>
      <h2
        className="block text-center mt-5"
        dangerouslySetInnerHTML={{ __html: desc.replace(/\n/g, "<br>") }}
      >
      </h2>

      <a itemProp="downloadUrl" href={action}>
        <button
          itemProp="fileSize"
          class="bg-mainred text-white px-4 py-2 mt-10"
        >
          {displayExtension(action)} - {(size / 1048576).toFixed(2)}MB
        </button>
      </a>

      {action2 && (
        <a itemProp="downloadUrl" href={action2}>
          <button
            itemProp="fileSize"
            class="bg-maingreen text-white px-4 py-2 mt-2"
          >
            {displayExtension(action2)} -{" "}
            {size2 ? (size2 / 1048576).toFixed(2) : "Error "}MB
          </button>
        </a>
      )}
    </div>
  );
}
