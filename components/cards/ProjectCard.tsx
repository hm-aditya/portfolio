import React, { ReactElement } from "react";

interface Props {
  title: string;
  description: string;
  href: string;
  icon: ReactElement;
  tags: string[];
}

export default function ProjectCard({ title, description, href, icon, tags }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-zinc-200 bg-white p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:border-blue-900 dark:bg-zinc-900"
    >
      <div className="flex items-center gap-4">
        <div className="text-blue-500 group-hover:text-blue-600">{icon}</div>
        <h3 className="text-xl font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-400">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block rounded-full border border-white/10 bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-800 transition-colors duration-300 group-hover:bg-blue-100 group-hover:text-blue-600 dark:bg-zinc-800 dark:text-zinc-200 dark:group-hover:bg-blue-800 dark:group-hover:text-white"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
