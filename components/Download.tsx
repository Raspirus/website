type Downloadprops = {
    title: string,
    image: string,
    desc: string,
    action: string,
    size: number
    action2: string | null,
    size2: number | null,
}

export default function Download({ title, image, desc, action, size, action2, size2 }: Downloadprops) {
    const getFileExtension = (url: string) => url.substring(url.lastIndexOf('/') + 1).split('.').pop();

    return (
        <div class="p-8 w-full md:w-1/2 lg:w-1/4 h-screen md:h-1/2 lg:h-full flex flex-col justify-center items-center">

            <div class="aspect-w-4 aspect-h-4">
                <img src={image} alt="Image" class="object-cover aspect-w-4 aspect-h-4" />
            </div>
            <h1><b>{title}</b></h1>
            <h2 className="hidden md:block text-center mt-5" dangerouslySetInnerHTML={{ __html: desc.replace(/\n/g, "<br>") }}></h2>
            <a href={action}>
                <button class="bg-blue-500 text-white px-4 py-2 mt-10">
                    {getFileExtension(action)?.toUpperCase()} - {(size / 1048576).toFixed(2)}MB
                </button>
            </a>
            {action2 &&
                <a href={action2}>
                    <button class="bg-blue-500 text-white px-4 py-2 mt-2">
                        {getFileExtension(action2)?.toUpperCase()} - {size2 ? (size2 / 1048576).toFixed(2) : "Error "}MB
                    </button>
                </a>}
        </div>
    );
}