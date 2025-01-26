import { ResourcesData } from '@/constants'

import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div className='relative p-2 mb-16 mx-auto  max-w-2xl w-screen overflow-hidden'>
     <h1 className="text-3xl font-bold dark:text-white"> Resources</h1>
     {ResourcesData.map((resource) => (
      <Link href={resource.href} key={resource.title} className="mt-4 group block rounded-lg border border-zinc-200 bg-white p-6 shadow-md dark:border-blue-900 dark:bg-zinc-900 hover:scale-105 hover:shadow-lg">
      
        <div className="text-blue-500 group-hover:text-blue-600">{React.createElement(resource.icon, { className: "size-10" })}</div>
        <h3 className="text-xl font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-white">
          {resource.title}
        </h3>
        <p className= " mt-2 text-sm text-zinc-700 dark:text-zinc-400">{resource.description}</p>
      
     
      </Link>
     ))}

    </div>
  )
}
