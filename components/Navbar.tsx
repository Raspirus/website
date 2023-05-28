type Props = {
  active: string;
};

export default function Navbar({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Downloads", href: "/downloads" },
    { name: "Docs", href: "https://raspirus.github.io/docs/", target: "_blank" },
    { name: "About", href: "/about"}
  ];

  return (
    <div class="bg-white w-full py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <img alt="Raspirus Logo" src="/logo.svg" class="w-6 h-6" />
        <div class="text-2xl  ml-1 font-bold">
          Raspirus
        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              target={menu.target ? menu.target : '_self'}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
