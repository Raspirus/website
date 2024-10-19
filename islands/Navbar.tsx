import { useState } from "preact/hooks";
import { IconExternalLink } from "npm:@tabler/icons-preact";

const Navbar = () => {
  const [show_mobile_menu, set_show_mobile_menu] = useState(false);
  const toggleMenu = () => set_show_mobile_menu(!show_mobile_menu);

  const menus = [
    { name: "HOME", href: "/" },
    { name: "DOCS", href: "https://raspirus.github.io/docs", target: "_blank" },
    { name: "SHOP", href: "/shop" },
    { name: "ENTERPRISE", href: "/enterprise" },
  ];

  return (
    <nav class="bg-black w-full py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <img alt="Raspirus Logo" src="/logo.svg" class="w-8 h-8" />
        <a href="/" class="text-2xl text-white ml-1 font-bold">
          RASPIRUS
        </a>
        <button
          onClick={toggleMenu}
          class="md:hidden text-white focus:outline-none ml-auto"
          aria-label="Toggle Menu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            >
            </path>
          </svg>
        </button>
      </div>
      <ul
        class={`md:flex md:flex-row items-center md:gap-6 ${
          show_mobile_menu ? "flex flex-col" : "hidden"
        }`}
      >
        {menus.map((menu) => (
          <li key={menu.name}>
            <a
              href={menu.href}
              target={menu.target || "_self"}
              class="text-white hover:text-mainred-500 py-1 data-[current]:text-mainred-500 data-[current]:font-bold"
            >
              <div class="flex items-center">
                <span>
                  {menu.name}
                </span>
                {menu.target === "_blank" && (
                  <IconExternalLink class="w-4 h-4 ml-1" />
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
