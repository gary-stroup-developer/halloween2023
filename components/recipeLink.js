import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RecipeLink = ({id,intro,title,url}) => {
  return (
    <Link href={`/recipes/${id}`}>
    <div className='flex flex-col justify-around items-center w-96 mx-auto my-4 p-3 shadow-2xl rounded-md hover:bg-black'>
    
        <div className='flex self-center p-2 h-52'>
            <Image className="rounded-md" src={url} width={200} height={200} alt={title}/>
        </div>
        <div className='flex flex-col p-4 text-xl w-3/4 h-64 text-purple-700'>
            <p className='text-2xl text-orange-600'>{title}</p>
            <p>{intro}</p>
        </div>
        
    </div>
    </Link>
  )
}

export default RecipeLink