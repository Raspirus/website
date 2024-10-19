import {
  IconBolt,
  IconLockOpen,
  IconShieldCheck,
  IconUserCode,
  IconPackage,
  IconSeeding
} from "npm:@tabler/icons-preact";

interface AboutCardProps {
  icon?: string;
  title?: string;
  description?: string;
}

const AboutCard = ({ icon, title, description }: AboutCardProps) => {
  return (
    <div class="m-2 p-4 bg-gray-700 rounded-lg">
      <div class="flex items-center mb-2">
        {(() => {
          switch (icon) {
            case "IconBolt":
              return <IconBolt class="w-8 h-8 mr-2" />;
            case "IconLockOpen":
              return <IconLockOpen class="w-8 h-8 mr-2" />;
            case "IconShieldCheck":
              return <IconShieldCheck class="w-8 h-8 mr-2" />;
            case "IconUserCode":
                return <IconUserCode class="w-8 h-8 mr-2" />;
            case "IconPackage":
                return <IconPackage class="w-8 h-8 mr-2" />;
            case "IconSeeding":
                return <IconSeeding class="w-8 h-8 mr-2" />;
            default:
              return <IconBolt class="w-8 h-8 mr-2" />;
          }
        })()}
        <span class="text-xl font-bold">{title}</span>
      </div>
      <hr class="my-2" />
      <p class="text-lg">{description}</p>
    </div>
  );
};

export default AboutCard;
