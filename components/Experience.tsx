import React from "react";
import { ExperienceData } from "@/constants";
export default function Experience() {
  return (
    <div className="mb-6 md:block sm:mt-0">
      <p className="text-3xl font-bold dark:text-white">Experience</p>
      <br />
     {ExperienceData.map((item)=>(
        <div key={item.id} className="mb-4">
        <p className="ml-1 text-2xl font-bold mb-2 dark:text-white">
          {item.job_role} - {item.company}  ({item.duration.start} -{item.duration.end})
        </p>
        <div className="text-zinc-700 dark:text-zinc-300 font-semibold space-y-2">
          {item.description.map((point, index) => (
            <ul key={index} className="list-disc ml-4">
            • {point}
          </ul>
          ))}
        </div>
      </div>
     ))}
    </div>
  );
}
