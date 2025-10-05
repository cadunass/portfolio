// Social media links configuration
// Icons are imported in the component for better tree-shaking

import { siteConfig } from "@/config";
import { PERSONAL_INFO } from "./personal-info";

export const SOCIAL_LINKS = [
  {
    title: "Home",
    href: "",
    iconName: "IconHome" as const,
  },
  {
    title: "Email",
    href: `mailto:${PERSONAL_INFO.email}`,
    iconName: "IconMail" as const,
  },
  {
    title: "LinkedIn",
    href: siteConfig.links.linkedin,
    iconName: "IconBrandLinkedin" as const,
  },
  {
    title: "GitHub",
    href: siteConfig.links.github,
    iconName: "IconBrandGithub" as const,
  },
] as const;
