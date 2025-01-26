import React, { ReactElement } from 'react'

interface Props {
    title: string;
    description: string;
    href: string;
    icon: ReactElement;
    tags: string[];
  }
export default function ProjectCard({
  title,
  description,
  href, 
  icon,
  tags}: Props) {
  return (
    <div>
      <h3 className="text-2xl font-bold dark:text-white">
        <a href={href}>{title}</a>
        {icon}
        </h3>
      <p className="text-zinc-700 dark:text-zinc-400">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
