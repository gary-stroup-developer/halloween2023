import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StoryLink = ({alt,id,url,tag,title}) => {
  return (
    <Link href={`/stories/${id}`}>
    <div className='mx-auto flex justify-between w-1/2 py-3 my-4 bg-purple-600 rounded-md hover:bg-orange-600'>
    
        <div className='flex p-2'>
            <Image className="rounded-md" src={url} width={200} height={200} alt={alt}/>
        </div>
        <div className='flex flex-col p-4 text-3xl w-1/2'>
            <p>{title}</p>
            <p>{tag}</p>
        </div>
        
    </div>
    </Link>
  )
}

export default StoryLink