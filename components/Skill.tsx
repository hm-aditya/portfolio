import React from "react";

import { Skills } from "@/constants";

import { Badge } from "./ui/badge";


const Skill = () => {
  return (
    <div className="mt-12  w-full">
      <p className="mb-4 text-3xl font-bold dark:text-white">Tech Stack</p>
      <div className="flex flex-wrap gap-1">
        {Skills.map((skill) => (
          <Badge
            className="bg-zinc-900  text-sm dark:bg-white dark:text-zinc-900"
            key={skill}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Skill;