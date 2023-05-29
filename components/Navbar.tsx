import IconExternalLink from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/external-link.tsx";

type Props = {
  active: string;
};
// TODO: Add Hamburger for mobile devices
export default function Navbar({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Downloads", href: "/downloads" },
    {
      name: "Docs",
      href: "https://raspirus.github.io/docs/",
      target: "_blank",
    },
    { name: "About", href: "/about" },
  ];

  return (
    <div class="bg-black w-full py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <img alt="Raspirus Logo" src="/logo.svg" class="w-8 h-8" />
        <a href="/" class="text-2xl text-white ml-1 font-bold">
          Raspirus
        </a>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              target={menu.target ? menu.target : "_self"}
              class="text-white hover:text-mainred py-1"
            >
              <div className="flex items-center">
                <span
                  class={menu.href === active
                    ? "font-bold border-b-2 border-maingreen"
                    : ""}
                >
                  {menu.name}
                </span>
                {menu.target && <IconExternalLink className="w-4 h-4" />}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
