import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import IconHeart from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/heart.tsx";
import IconBrandDiscord from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-discord.tsx";

export default function Footer() {
  return (
    <div
      itemProp="funding"
      class="mt-8 flex justify-center items-center border-none bg-transparent text-black gap-4"
    >
      <a
        href="https://github.com/sponsors/Raspirus"
        target="_blank"
        className="flex items-center rounded"
      >
        <IconHeart class="w-8 h-8 text-red-500 mr-2" />
      </a>

      <a
        href="https://discord.gg/Vx7fW9PA8B"
        target="_blank"
        className="flex items-center rounded"
      >
        <IconBrandDiscord class="w-8 h-8 text-blue-900 mr-2" />
      </a>

      <a
        href="https://github.com/Raspirus/Raspirus"
        target="_blank"
        className="flex items-center rounded"
      >
        <IconBrandGithub class="w-8 h-8 mr-2" />
      </a>
    </div>
  );
}
