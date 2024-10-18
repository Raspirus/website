import { IconDownload, IconInfoSquareRounded } from "npm:@tabler/icons-preact";
import LinkButton from "../components/LinkButton.tsx";
import SocialIcons from "../components/SocialIcons.tsx";

// https://forms.gle/hjUSaVUkxjyimDsM9

export default function Home() {
  return (
    <div class="flex flex-wrap justify-center items-center flex-1 py-8 text-gray-400 my-auto">
      <div class="flex flex-col justify-center items-center">
        <div class="mb-8 mx-8 text-center">
          <img class="h-48 mx-auto mb-6" src="/logo.svg" alt="Raspirus Logo" />
          <span class="block text-3xl font-bold text-white mb-3">
            RASPIRUS
          </span>
          <span class="block text-lg -mb-1.5">
            A lightweight and intuitive Virusscanner - Open Source!
          </span>
        </div>
        <div class="flex justify-center items-center flex-col">
          <div class="flex justify-center items-center">
            <LinkButton
              class="bg-maingreen-600 font-bold py-3 px-4 mr-1 flex justify-start items-center cursor-pointer rounded"
              to="/about"
            >
              <IconInfoSquareRounded class="w-6 h-6 text-white" />
              <span class="text-white ml-1">About</span>
            </LinkButton>
            <LinkButton
              class="bg-mainred-600 font-bold py-3 px-4 ml-1 flex justify-start items-center cursor-pointer rounded"
              to="/download"
            >
              <IconDownload class="w-6 h-6 text-white" />
              <span class="text-white ml-1">Download</span>
            </LinkButton>
          </div>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}
