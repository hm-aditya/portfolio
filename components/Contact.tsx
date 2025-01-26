"use client";
import React from "react";
import { Social } from "./ui/Social";

export default function Contact() {
  return (
    <div className="mx-auto flex max-w-screen-md flex-col items-center justify-center px-5 pt-12 p-4">
      <h1 className="text-3xl font-bold text-center dark:text-white mb-4">
        Get in touch
      </h1>
      <p className="text-zinc-700 dark:text-zinc-400 font-semibold">
        I&apos;m currently looking for new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I&apos;ll try
        my best to get back to you!
        <br />
        Contact me on{" "}
        <a
          className="text-[#3b82f6] hover:underline"
          href="https://x.com/hm__aditya"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{" "}
        and I&apos;ll respond whenever I can and here are some of my social
        links.
      </p>
      <br />
      <Social />
    </div>
  );
}
