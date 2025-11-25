import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconMail,
} from "@tabler/icons-react";
import { SOCIAL_LINKS } from "@/constants";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/types";
import { FloatingSocialNavbar } from "../ui/floating-social-navbar";

interface SocialLinksProps {
  lang: Locale;
}

export function SocialLinks({ lang }: SocialLinksProps) {
  const t = getTranslations(lang);

  // Map icon names to actual icon components
  const iconMap = {
    IconHome: IconHome,
    IconBrandLinkedin: IconBrandLinkedin,
    IconBrandGithub: IconBrandGithub,
    IconMail: IconMail,
  };

  const links = SOCIAL_LINKS.map((link) => {
    const IconComponent = iconMap[link.iconName];
    // Get translated title from social translations
    const titleKey = link.iconName
      .replace("Icon", "")
      .replace("Brand", "")
      .toLowerCase() as keyof typeof t.social;
    const title = t.social[titleKey] || link.title;

    return {
      title,
      icon: (
        <IconComponent className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: link.href,
    };
  });

  return <FloatingSocialNavbar items={links} />;
}
