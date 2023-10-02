import RecipeLink from '@/components/recipeLink'
import React from 'react'
import { data } from './recipes'

const RecipeDashboard = () => {
  const recipes = data.recipes;
  return (
    <div className={`grid grid-flow-row grid-cols-3 relative top-52 w-full`}>
    
        {
            recipes.map((recipe,index) => {
                return (
                    <RecipeLink key={recipe.id + index * Math.random().toFixed(10)} alt={recipe.title} intro = {recipe.intro} title={recipe.title} url={recipe.img} id={recipe.id} />
                )
            })
        }
    </div>
  )
}

export default RecipeDashboard