import Header from "../components/Header.tsx";
import Navbar from "../components/Navbar.tsx";
import Information from "../components/Information.tsx";

// Icons
import IconInfoSquareRounded from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/info-square-rounded.tsx";
import IconUser from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/user.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import IconExternalLink from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/external-link.tsx";
import IconIcons from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/icons.tsx";
import IconUsers from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/users.tsx";

export default function About() {
  return (
    <>
      <Header title="About | Raspirus" />
      <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-default">
        <Navbar active="/about" />
        <div className="flex justify-center h-full">
          <div
            itemScope
            itemType="https://schema.org/SoftwareApplication"
            className="w-full sm:w-1/3 bg-white bg-opacity-50 my-6 p-6"
          >
            <h1 className="text-center mt-0 mb-4 text-5xl">ABOUT</h1>
            <p itemProp="about" className="text-justify mb-1">
              Introducing Raspirus, an innovative application designed to
              address the security concerns of working on offline computers
              without antivirus protection, particularly those shared among
              multiple users who frequently utilize personal USB devices for
              file transfers. By leveraging the power of Raspberry Pi, as well
              as Windows and other Linux systems, Raspirus provides a
              comprehensive solution. Through file scanning functionality,
              Raspirus intelligently examines each file on the USB key,
              efficiently computing their hashes and cross-referencing them with
              an extensive signature database to promptly alert users about
              potential threats, all while minimizing resource consumption on
              Raspberry Pi 3 devices.
            </p>
            <hr />
            <h2 className="text-center text-2xl mt-4 mb-0">Information</h2>
            <Information
              akey="Name"
              avalue="Raspirus (Raspberry Pi + Antivirus)"
              aicon={<IconInfoSquareRounded class="w-6 h-6 mr-2" />}
              iprop="name"
            />

            <Information
              akey="Maintainer"
              avalue={
                <a
                  href="https://github.com/Benji377"
                  target="_blank"
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  Benji377
                </a>
              }
              aicon={<IconUser class="w-6 h-6 mr-2" />}
              iprop="author"
            />

            <Information
              akey="Open-source and free on"
              avalue={
                <a
                  href="https://github.com/Raspirus"
                  target="_blank"
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  GitHub
                </a>
              }
              aicon={<IconBrandGithub class="w-6 h-6 mr-2" />}
              iprop="installUrl"
            />

            <Information
              akey="Visit us on AlternativeTo"
              avalue={
                <a
                  href="https://alternativeto.net/software/raspirus"
                  target="_blank"
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  Best alternative to common linux antivirus
                </a>
              }
              aicon={<IconExternalLink class="w-6 h-6 mr-2" />}
              iprop="softwareAddOn"
            />

            <Information
              akey="Visit us on Slant.co"
              avalue={
                <a
                  href="https://www.slant.co/topics/12099/viewpoints/4/~antivirus-for-linux~raspirus"
                  target="_blank"
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  Raspirus has been recommended
                </a>
              }
              aicon={<IconExternalLink class="w-6 h-6 mr-2" />}
              iprop="softwareAddOn"
            />

            <hr className="mt-1" />
            <h2 className="text-center text-2xl mt-4 mb-0">Credits</h2>

            <Information
              akey="Icons"
              avalue={
                <a
                  href="https://www.flaticon.com/free-icons"
                  target="_blank"
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  Created by Freepik - Flaticon
                </a>
              }
              aicon={<IconIcons class="w-6 h-6 mr-2" />}
              iprop="creditText"
            />

            <Information
              akey="Contributors"
              avalue={
                <a
                  href="https://github.com/Raspirus/Raspirus#contributors"
                  target="_blank"
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  Helped out on GitHub
                </a>
              }
              aicon={<IconUsers class="w-6 h-6 mr-2" />}
              iprop="contributor"
            />
          </div>
        </div>
      </div>
    </>
  );
}
