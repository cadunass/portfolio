import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconMail,
} from "@tabler/icons-react";
import { SOCIAL_LINKS } from "@/constants";
import { FloatingSocialNavbar } from "../ui/floating-social-navbar";

export function SocialLinks() {
  // Map icon names to actual icon components
  const iconMap = {
    IconHome: IconHome,
    IconBrandLinkedin: IconBrandLinkedin,
    IconBrandGithub: IconBrandGithub,
    IconMail: IconMail,
  };

  const links = SOCIAL_LINKS.map((link) => {
    const IconComponent = iconMap[link.iconName];
    return {
      title: link.title,
      icon: (
        <IconComponent className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: link.href,
    };
  });

  return <FloatingSocialNavbar items={links} />;
}
