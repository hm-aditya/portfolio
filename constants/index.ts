import {
  BanknoteIcon,
  CodeXml,
  Coffee,
  File,
  Github,
  HomeIcon,
  Laptop,
  LaptopMinimal,
  Linkedin,
  LucideTwitter,
  Mail,
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
  }
];

export const SocialsDataPC = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: LaptopMinimal, label: "Projects" },
    {href:"https://drive.google.com/file/d/1qCL2dg_Juh2vSq5dpifIxuxnwddMm1ZX",icon:File,label:"Resume"},
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hm-aditya",
        icon: Github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aditya-patil-893808274/",
        icon: Linkedin,
      },
      X: {
        name: "X",
        url: "https://x.com/hm__aditya",
        icon: LucideTwitter,
      },
      email: {
        name: "Email",
        url: "mailto:patilad3618@gmail.com",
        icon: Mail,
      },
      BuyMeACoffee: {
        name: "BuyMeACoffee",
        url: "https://www.buymeacoffee.com/hm_aditya",
        icon: Coffee,
      }
    },
  },
};

export const SocialsData = {
  navbar: [
    { href: "/projects", icon: LaptopMinimal, label: "Projects" },
    {href:"https://drive.google.com/file/d/1T2w5OsduW8T8QGfBEVgJpUv2oVIKa9tL/view?usp=sharing",icon:File,label:"Resume"},
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hm-aditya",
        icon: Github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aditya-patil-893808274/",
        icon: Linkedin,
      },
      email: {
        name: "Email",
        url: "mailto:patilad3618@gmail.com",
        icon: Mail,
      }
    },
  },
};


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
      "Redis",
      "Stripe",
      "Chart.js",
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
      "Postgres",
      "Docker",
      "Express",
      "Node.js",
      "TurboRepo",
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
    title: "Light SaaS landing page",
    description: "Landing page for light SaaS web application",
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

export const ResourcesData=[{
  title:"100xdevs",
  description:"Fullstack Web Developer 100xdevs Cohort 2",
  href:"https://100xdevs.com/",
  icon:CodeXml
}

]