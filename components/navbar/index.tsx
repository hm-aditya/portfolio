import { Links } from "@/constants";

import MobileLinks from "./MobileLinks";
import NavLinks from "./NavLinks";
import Theme from "./Theme";
import Link from "next/link";
import { BorderBeam } from "../ui/border-beam";

const Navbar = () => {
  return (
    <nav className="sticky-nav mx-auto my-0 flex w-full max-w-4xl items-center text-center justify-between  border border-grey-100    dark:border-zinc-800 rounded-2xl p-5 md:mb-10 md:mt-4 backdrop-filter ">
      <BorderBeam />
      <h1 className="hidden md:block text-2xl sm:gap-2 tracking-tight font-bold text-clip bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        <Link href="/">Portfolio</Link>
      </h1>
      <div className="hidden  rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10 sm:block">
        <NavLinks links={Links} />
      </div>
      <Theme />
      <div className="block sm:hidden">
        <MobileLinks />
      </div>
    </nav>
  );
};

export default Navbar;
