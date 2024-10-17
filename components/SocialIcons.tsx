import { IconBrandProducthunt, IconBrandDiscord, IconBrandGithub } from "npm:@tabler/icons-preact";

const SocialIcons = () => {
    return (
        <div class="mt-8 flex justify-center items-center gap-4">
        <a href="https://www.producthunt.com/products/raspirus" target="_blank" className="flex items-center">
          <IconBrandProducthunt class="w-8 h-8 mr-2" />
        </a>
    
        <a href="https://discord.gg/Vx7fW9PA8B" target="_blank" className="flex items-center">
          <IconBrandDiscord class="w-8 h-8 mr-2" />
        </a>
    
        <a href="https://github.com/Raspirus/Raspirus" target="_blank" className="flex items-center">
          <IconBrandGithub class="w-8 h-8 mr-2" />
        </a>
      </div>
    );
};

export default SocialIcons;