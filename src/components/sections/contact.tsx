"use client";

import { IconMail, IconMapPin } from "@tabler/icons-react";
import { PERSONAL_INFO } from "@/constants";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-neutral-50 dark:bg-neutral-900/50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-neutral-800 dark:text-white mb-6 text-center">
          Get In Touch
        </h2>
        <div className="text-center space-y-6">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-4">
            {PERSONAL_INFO.email && (
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 px-6 py-3 bg-neutral-800 dark:bg-white text-white dark:text-neutral-800 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <IconMail size={20} />
                <span>Send Email</span>
              </a>
            )}

            {PERSONAL_INFO.location && (
              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                <IconMapPin size={20} />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
