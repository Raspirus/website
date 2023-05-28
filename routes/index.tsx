import Footer from "../components/Footer.tsx";
import IconDownload from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/download.tsx"
import Navbar from "../components/Navbar.tsx";
import Header from "../components/Header.tsx";

export default function Home() {

  return (
    <>
      <Header title="Raspirus" />
        <Navbar active="/" />
        <div class="flex justify-center items-center my-8 text-gray-600">
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
                href="/downloads"
                class="bg-gray-900 text-gray-100 hover:text-white shadow font-bold text-sm py-3 px-4 rounded flex justify-start items-center cursor-pointer mt-2"
              >
                <IconDownload class="mr-4 w-6 h-6" />
                <span>Download Now</span>
              </a>
            </div>
            <Footer />
          </div>
        </div>
    </>
  )
}
