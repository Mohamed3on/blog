import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://www.mohamed3on.com/", // replace this with your deployed domain
  author: "Mohamed Oun",
  profile: "https://www.mohamed3on.com/",
  desc: "Writings of a product engineer",
  title: "Mo's tech takes",
  ogImage: "profile.jpg",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Twitter",
    href: "https://x.com/mohamed3on",
    linkTitle: `${SITE.author} on Twitter`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/mohamed3on",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:mohamed3on@gmail.com",
    linkTitle: `Send an email to ${SITE.author}`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/mohamed3on",
    linkTitle: `${SITE.author} on Instagram`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/mohamed3on",
    linkTitle: ` ${SITE.author} on Github`,
    active: true,
  },
];
