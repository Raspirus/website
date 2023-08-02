import Footer from "../components/Footer.tsx";
import IconDownload from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/download.tsx";
import Navbar from "../components/Navbar.tsx";
import Header from "../components/Header.tsx";

// Add decent background
export default function Home() {
  return (
    <>
      <Header title="Raspirus" />
      <div class="min-h-screen bg-cover bg-center bg-no-repeat bg-default">
        <Navbar active="/" />
        <div
          itemScope
          itemType="https://schema.org/SoftwareApplication"
          class="flex justify-center items-center py-8 text-gray-600"
        >
          <div>
            <div class="mb-8 mx-8 text-center">
              <img
                class="h-48 mx-auto mb-6"
                src="/transparent-logo.png"
                alt="Raspirus Logo"
              />
              <span
                itemProp="name"
                class="block text-3xl font-bold text-black mb-3"
              >
                RASPIRUS
              </span>
              <span
                itemProp="description"
                class="block text-white text-lg -mb-1.5"
              >
                A lightweight and intuitive Virusscanner - Open Source!
              </span>
            </div>
            <div class="flex justify-center items-center flex-col">
              <a
                href="/downloads"
                class="bg-maingreen text-gray-100 hover:text-white shadow font-bold text-sm py-3 px-4 rounded flex justify-start items-center cursor-pointer mt-2"
              >
                <IconDownload class="mr-4 w-6 h-6" />
                <span>Download Now</span>
              </a>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
