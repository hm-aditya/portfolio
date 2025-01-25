import {
    BanknoteIcon,
    BedDoubleIcon,
    BedSingleIcon,
    BookOpenText,
    Crown,
    Laptop,
    PizzaIcon,
    ShoppingBag,
    ShoppingCartIcon,
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
  