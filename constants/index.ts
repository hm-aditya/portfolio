
import {
  BanknoteIcon,
  CodeXml,
  Laptop,
  ShoppingCartIcon,
  VideoIcon,
} from "lucide-react";


export interface linksType {
  name: string;
  link: string;
}

export const Links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Resources",
    link: "/resources",
  },
  // {
  //   name: "Etc",
  //   link: "/etc",
  // },
];

export const Skills = [
  "Javascript",
  "Typescript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Hono",
  "Cloudflare workers",
  "Prisma",
  "Postgres",
  "MySQL",
  "MongoDB",
  "Supabase",
  "Docker",
  "TailwindCSS",
  "Framer Motion",
  "Git",
  "GitHub",
  "Vercel",
  "Nginx",
  "AWS EC2 and S3",
];

export const Projects = [
  {
    title: "AvenueMart",
    description:
      "E-Commerce Application Using Next Js. using Prisma Postgresql,Upstash Redis,Uploadthing,Kinde-Auth etc",
    href: "https://ecommerce-smoky-alpha.vercel.app/",
    icon: ShoppingCartIcon,
    tags: [
      "Next.js",
      "ShadCN",
      "Prisma",
      "Postgres",
      "TailwindCSS",
      "Kinde-Auth",
      "Uploadthing",
      "Upstash Redis",
      "Stripe",
      "Chart.js",
    ],
  },
  {
    title: "Portfolio",
    description: "Portfolio made using Next Js",
    href: "https://hmaditya.vercel.app/",
    icon: Laptop,
    tags: [
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
      "ShadCN",
      "Magic-UI",
      "Accternity-UI",
    ],
  },
  {
    title: "PayMe",
    description:
      "A payment web application using Next.js for the frontend and PostgreSQL with Prisma ORM for database management with a dummy bankwebhook server for processing transactions.",
    href: "https://github.com/hm-aditya/PayMe",
    icon: BanknoteIcon,
    tags: [
      "Next.js",
      "TailwindCSS",
      "Prisma",
      "Postgres,Docker,Express,Node.js,TurboRepo",
    ],
  },
  {
    title: "light saas landing page",
    description: "Landing page for light saas web application",
    href: "https://light-saas-landing-page-woad.vercel.app/",
    tags: ["Next.js", "TailwindCSS", "Framer Motion", "ShadCN"],
    icon: CodeXml,
  },
  {
    title: "Thumbnail-Previewer",
    description:
      "Thumbnail Previewer where user can upload an thumbnail image to preview it in various sizes (mobile/tablet/desktop view) for youtube video",
    href: "https://github.com/hm-aditya/thumbnail-previewer",
    tags: [
      "Next.js",
      "TailwindCSS",
      "ShadCN",
      "Prisma",
      "Postgres",
      "Clerk",
      "Stripe",
    ],
    icon: VideoIcon,
  },
];

export const UpcomingProjects = [
  {
    title: "TaskFlow",
    description:
      "Automate your workflow with TaskFlow, an open-source task automation app like Zapier.",
    href: "https://github.com/vikas-nayak/Task-Flow",
    icon: Laptop,
    tags: [
      "Next.js",
      "TailwindCSS",
      "Prisma",
      "Postgres",
      "ReactWebFlow",
      "Framer Motion",
      "ShadCN",
      "Clerk",
      "Apis of Notion,Open AI,Slack,Discord,Instagram,Linkedin etc",
    ],
  },
  {
    title: "Text2Canvas",
    description: "Convert text prompt to Images using Generative AI.",
    href: "https://github.com/hm-aditya/Text2Canvas",
    icon: CodeXml,
    tags: [
      "Next.js",
      "TailwindCSS",
      "ShadCN",
      "Prisma",
      "Postgres",
      "Clerk",
      "Framer Motion",
    ],
  },
];
