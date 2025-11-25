import type { PersonalInfo } from "@/types";

/**
 * Personal information (locale-independent data)
 * Translatable content (title, bio) is stored in locale JSON files
 */
export const PERSONAL_INFO: PersonalInfo = {
  username: "cadunass",
  fullName: ["Carlos", "Eduardo", "Nass"],
  email: "cadunass0@gmail.com",
  location: "Joinville, Santa Catarina, Brazil",
  locationShort: "Joinville, SC",
  timezone: "UTC-3",
  openToWork: true,
};
