import { IconDownload, IconInfoSquareRounded } from "npm:@tabler/icons-preact";
import LinkButton from "../components/LinkButton.tsx";
import SocialIcons from "../components/SocialIcons.tsx";

export default function Home() {
  return (
    <div class="flex flex-wrap justify-center items-center flex-1 py-8 text-gray-600 my-auto">
      <div class="flex flex-col justify-center items-center">
        <div class="mb-8 mx-8 text-center">
          <img class="h-48 mx-auto mb-6" src="/logo.svg" alt="Raspirus Logo" />
          <span class="block text-3xl font-bold text-black dark:text-white mb-3">
            RASPIRUS
          </span>
          <span class="block text-black dark:text-white text-lg -mb-1.5">
            A lightweight and intuitive Virusscanner - Open Source!
          </span>
        </div>
        <div class="flex justify-center items-center flex-col">
          <div class="flex justify-center items-center">
            <LinkButton
              color="mainred"
              class="font-bold py-3 px-4 flex justify-start items-center cursor-pointer"
              to="https://github.com/sponsors/Raspirus" target="_blank">
              <IconDownload class="w-6 h-6" />
              <span>Download</span>
            </LinkButton>
            <LinkButton
              color="maingreen"
              class="font-bold py-3 px-4 ml-2 flex justify-start items-center cursor-pointer"
              to="https://forms.gle/hjUSaVUkxjyimDsM9" target="_blank">
              <IconInfoSquareRounded class="w-6 h-6" />
              <span>Feedback</span>
            </LinkButton>
          </div>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}
