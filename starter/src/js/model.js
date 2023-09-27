import {link} from './config.js'
import {idItem} from './helper.js'
import {view} from './views/mainRecipe.js'

export const search=async function(){
    try{
  

 const linked=await fetch `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc887`
//  console.log(`${link}`)
  
  const jay=await linked.json()
  // console.log(jay.data.recipe)
  
  // if(!fetching.ok) throw new Error(console.log(`${jay.status}`))
  
  let {recipe}=jay.data
  
  // console.log(jay.data.recipe)
  
  
  const rec={
    cookingTime:recipe.cooking_time,
    servings:recipe.servings,
    url:recipe.image_url,
  title: recipe.title,
    id: recipe.id,
  ing:recipe.ingredients,
  source:recipe.source_url,
  }
  /*
  fn()*/
  
return rec
    }catch{console.log('catch error')}
  };
  
