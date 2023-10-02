import React from 'react';
import { data } from '../recipes';
import { joti } from "../../../utils/fonts";
import Image from 'next/image';

const RecipePage = ({params}) => {
  const id = params.id.substring(params.id.length-1);
  const recipeDetail = data.recipes[id];
  return (
    <main className={`${joti.className} relative top-52 w-3/4 mx-auto text-2xl leading-10`}>
      <section>
        <p className='text-5xl text-orange-600 mb-5'>{recipeDetail.title}</p>
        <Image className="rounded-md shadow-xl" src={recipeDetail.img} width="678" height="900"/>
      </section>
      <section className='w-3/4 my-5'>
        <p>{recipeDetail.intro}</p>
      </section>
      <section className='flex flex-col my-4 rounded-lg box-border'>
        <div className='flex w-3/4 justify-between'>
          <p>Prep time: {recipeDetail.prep_time}</p>
          <p>Total time: {recipeDetail.total_time}</p>
        </div>
        <p>Servings : <span>{recipeDetail.servings}</span></p>
      </section>
      <section className='my-5'>
        <h2 className='text-bold text-3xl'>Ingredients</h2>
          <ul>
          {
            recipeDetail.ingredients.map((item,index) => {
              return (<li className="my-4" key={`${recipeDetail.id}-${index}`}>{item}</li>);
            })
          }
          </ul>
      </section>
      <section className='my-5'>
          <h2 className='text-bold text-3xl'>Directions</h2>
          {
            recipeDetail.directions.map((step,index) => {
              return <p key={`${recipeDetail.title}-${index * Math.random().toFixed(10)}`} className='my-4'>{step}</p>
            })
          }
          
      </section>
    </main>
  )
}

export default RecipePage