import Image from "next/image";
import { data } from "./movies";


import React from 'react'

const MoviesPage = () => {
    const movies = data.movies;

  return (
    
    <div className="m-auto relative top-52 w-3/4 h-100">
        {
            movies.map((movie) => {
                return (
               <div className = "text-lg md:text-2xl flex flex-col justify-around items-center max-w-5xl mt-5" key={movie.key}>
                    <div className="p-10 text-5xl">
                        <p className="inline-block mr-5">{movie.key}</p>
                        <p className="inline-block">{movie.title}</p> 
                    </div>
                    <div className="flex flex-col items-center lg:justify-between lg:flex-row shadow-2xl p-4">
                        <Image className="rounded-lg" src={movie.img} height={400} width={400} alt={`${movie.title} scene`} />
                        <p className="pl-2 md:w-1/2">{movie.summary}</p> 
                    </div>
                    
                </div> 
            )})
        }
    </div>
    
  )
}

export default MoviesPage