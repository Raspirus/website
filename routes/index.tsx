import { Head } from "$fresh/runtime.ts";
import { Footer } from "../components/Footer.tsx";
import IconDownload from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/download.tsx"

export default function Home() {

  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <title>Raspirus</title>
      </Head>
      <img
        src="/background.png"
        alt="bg"
        class="absolute top-0 left-0 w-full min-h-screen -z-10 bg-white-900 object-cover"
      />
      <div class="flex justify-center items-center h-screen text-gray-600">
        <div>
          <div class="mb-8 mx-8 text-center">
            <img
              class="h-48 mx-auto mb-6"
              src="/logo.svg"
              alt="Raspirus Logo"
            />
            <span class="block text-3xl font-bold text-black mb-3">
              Raspirus
            </span>
            <span class="block text-lg -mb-1.5">
              A lightweight and intuitive Virusscanner
            </span>
          </div>
          <div class="flex justify-center items-center flex-col">
            <a
              href="https://github.com/Raspirus/Raspirus/releases/latest"
              class="bg-gray-900 text-gray-100 hover:text-white shadow font-bold text-sm py-3 px-4 rounded flex justify-start items-center cursor-pointer mt-2"
            >
              <IconDownload class="mr-4 w-6 h-6"/>
              <span>Download Now</span>
            </a>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}
