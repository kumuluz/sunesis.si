import { BLOG_URL, GITHUB_ORG_URL, SOCIAL } from "./constants";

export const navigationLinks = [
  {
    name: "menu.services.title",
    href: "/services",
    children: [
      { href: "/services/solutions", name: "menu.services.solutions" },
      { href: "/services/modernization", name: "menu.services.modernization" },
      { href: "/services/ai", name: "menu.services.ai" },
      { href: "/services/backbase", name: "menu.services.backbase" },
    ],
  },
  {
    name: "menu.products.title",
    href: "/products",
    children: [
      { href: "/products/digital-platform", name: "menu.products.digital-platform" },
      { href: "/products/business-api", name: "menu.products.business-api" },
      { href: "/products/ai-digital-assistant", name: "menu.products.ai-digital-assistant" },
      { href: "/products/ai-knowledge-mentor", name: "menu.products.ai-knowledge-mentor" },
    ],
  },
  { href: "/technologies", name: "menu.technologies" },
  { href: "/customers", name: "menu.customers" },
  {
    name: "menu.aboutUs.title",
    href: "/about",
    children: [
      { href: "/about/sunesis", name: "menu.aboutUs.aboutUs" },
      { href: "/about/references", name: "menu.aboutUs.references" },
      { href: "/about/awards", name: "menu.aboutUs.awards" },
      { href: "/projects", name: "menu.aboutUs.projects" },
    ],
  },
  { href: BLOG_URL, name: "menu.blog", external: true },
  { href: "/about/sunesis#footer", name: "menu.contactUs" },
];

export const footerLinks = [
  {
    title: "footer.services.title",
    links: [
      { title: "footer.services.service1" },
      { title: "footer.services.service2" },
      { title: "footer.services.service3" },
      { title: "footer.services.service4" },
      { title: "footer.services.service5" },
      { title: "footer.services.service6" },
      { title: "footer.services.service7" },
      { title: "footer.services.service8" },
      { title: "footer.services.service9" },
      { title: "footer.services.service10" },
      {
        title: "footer.services.more",
        href: "/services",
      },
    ],
  },
  {
    title: "footer.community.title",
    links: [
      {
        title: "footer.community.link1",
        href: BLOG_URL,
      },
      {
        title: "footer.community.link2",
        href: GITHUB_ORG_URL,
      },
      {
        title: "footer.community.link3",
        href: SOCIAL.TWITTER_URL,
      },
      {
        title: "footer.community.link4",
        href: SOCIAL.LINKEDIN_URL,
      },
    ],
  },
  {
    title: "footer.company.title",
    links: [
      {
        title: "footer.company.link1",
        href: "/about/sunesis",
      },
      {
        title: "footer.company.link2",
        href: "/about/awards",
      },
      {
        title: "footer.company.link3",
        href: BLOG_URL,
      },
    ],
  },
];

import linkedInIcon from "./images/social/linkedin.svg";
import twitterIcon from "./images/social/twitter.svg";

export const socialLinks = [
  {
    img: twitterIcon,
    href: SOCIAL.TWITTER_URL,
  },
  {
    img: linkedInIcon,
    href: SOCIAL.LINKEDIN_URL,
  },
];
