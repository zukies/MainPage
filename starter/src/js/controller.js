
import icons from 'url:../img/icons.svg';
import * as classes from './config.js'
const recipeContainer=document.querySelector('.recipe')
const searchButton=document.querySelector('.search__btn')
const resultsContainer=document.querySelector('.search-results')

const dropDownMain=[
  "carrot", "broccoli", "asparagus", "cauliflower", "corn", "cucumber", "green pepper", "lettuce", "mushrooms", "onion", "potato", "pumpkin", "red pepper", "tomato", "beetroot", "brussel sprouts", "peas", "zucchini", "radish", "sweet potato", "artichoke", "leek", "cabbage", "celery", "chili", "garlic", "basil", "coriander", "parsley", "dill", "rosemary", "oregano", "cinnamon", "saffron", "green bean", "bean", "chickpea", "lentil", "apple", "apricot", "avocado", "banana", "blackberry", "blackcurrant", "blueberry", "boysenberry", "cherry", "coconut", "fig", "grape", "grapefruit", "kiwifruit", "lemon", "lime", "lychee", "mandarin", "mango", "melon", "nectarine", "orange", "papaya", "passion fruit", "peach", "pear", "pineapple", "plum", "pomegranate", "quince", "raspberry", "strawberry", "watermelon", "salad", "pizza", "pasta", "popcorn", "lobster", "steak", "bbq", "pudding", "hamburger", "pie", "cake", "sausage", "tacos", "kebab", "poutine", "seafood", "chips", "fries", "masala", "paella", "som tam", "chicken", "toast", "marzipan", "tofu", "ketchup", "hummus", "chili", "maple syrup", "parma ham", "fajitas", "champ", "lasagna", "poke", "chocolate", "croissant", "arepas", "bunny chow", "pierogi", "donuts", "rendang", "sushi", "ice cream", "duck", "curry", "beef", "goat", "lamb", "turkey", "pork", "fish", "crab", "bacon", "ham", "pepperoni", "salami", "ribs"]


window.addEventListener('hashchange',both)
  window.addEventListener('load',both)

// function init(){
// let init=`<div class="recipe">
//         <div class="message">
//           <div>
//             <svg>
//               <use href="src/img/icons.svg#icon-smile"></use>
//             </svg>
//           </div>
//           <p>Start by searching for a recipe or an ingredient. Have fun!</p>
//         </div>`
//         recipeContainer.innerHTML=''
//         recipeContainer.insertAdjacentHTML('afterbegin',init)
// }
// init()
  function both(data){
    console.log(data)
    if(!data)return
if (data){
  renderSpinner()
    fetchData()
  }
  }

async function fetchData(){
  try{
let link=window.location.hash.slice(1)
  
 data=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${link}`)

 const JSON=await data.json()
    let arr=await JSON.data.recipe;
    
   

// setTimeout(function(){ new Promise(function(reject){

//   // resolve(elements(arr))
//   reject(function(){recipeContainer.innerHTML=''
//     console.log('taking too long')})
//   })
//   ,3})
  
  elements(arr)

 

  // renderSpinner(data)
// const data=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${link}`)

}catch{return setTimeout(function(){ 
  recipeContainer.innerHTML=''
let error=`<div class="error">
<div>
<svg>
  <use href="${icons}#icon-alert-triangle"></use>
</svg>
</div>
<p>Recipe not found, please give a proper recipe number!`
 
  recipeContainer.insertAdjacentHTML('afterbegin',error)
},3000)}
  
}

function renderSpinner(data)
{

    
  // if(!data){setTimeout(async function(){
  //  },0.30)}
  let spinnerHtml=`<div class="spinner">
  <svg>
    <use href="${icons}#icon-loader"></use>
  </svg>
</div>`

    recipeContainer.innerHTML=''
    recipeContainer.insertAdjacentHTML('afterbegin',spinnerHtml)
    
}


// function fetchData(){
// renderSpinner()

// }


const elements=function(recipeItems){
  // console.log(recipeItems)
  
  let html=
  `<figure class="recipe__fig">
  <img src='${recipeItems.image_url}' alt="Tomato" class="recipe__img" />
  <h1 class="recipe__title">
    <span>${recipeItems.title}</span>
  </h1>
</figure>
<div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${recipeItems.cooking_time}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${recipeItems.servings}</span>
        <span class="recipe__info-text">servings</span>
        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="recipe__user-generated">
        <svg>
          <use href="${icons}#icon-user"></use>
        </svg>
      </div>
      
  <button class="btn--round">
  <svg class="">
    <use href="${icons}#icon-bookmark-fill"></use>
  </svg>
</button>
</div>
  <h2 class="heading--2">Recipe ingredients</h2>
  <div class="recipe__ingredients">
    
      <ul class="recipe__ingredient-list">
      
    ${recipeItems.ingredients.map(item =>
      
    ` <li class="recipe__ingredient">
      
      <svg class="recipe__icon">
        <use href="${icons}#icon-check"></use>
      </svg>
    
      <div class="recipe__quantity">${item.quantity===null? ' ':item.quantity}</div>

     <div class="recipe__description">
      <span class="recipe__unit">${item.unit}</span>
       ${item.description}
      
      </div>
     </li>
      
      `).join('')}
      </ul>
      </div>
      
</div>

  <div class="recipe__directions">
          <h2 class="heading--2">DIRECTIONS</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">The Pioneer Woman</span>. Please check out
            directions at their website.
          </p>
          <!--<a
            class="btn--small recipe__btn"
            href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>-->
        </div>
      
      </div>
    </div>`
     
  recipeContainer.innerHTML=''
recipeContainer.insertAdjacentHTML('afterbegin',html)
  }


searchButton.addEventListener('click',async function(e){
e.preventDefault()

  
 let value=document.querySelector('.search__field').value

    sideRecipes(value)
    document.querySelector('.search__field').value="search"
    
  })

async function sideRecipes(name){
  const data =await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${name}`)
  const JSON=await data.json()

// let arr=await JSON.data.recipe;
let arr=await JSON.data.recipes;
// console.log(arr)
// elements(arr)

elem(arr)
}

function elem(element){
 resultsContainer.innerHTML=''
  element.map(item=>{
   
    // console.log(item)
  let html=`
                <li class="preview">
            <a class="preview__link preview__link--active" href="#${item.id}">
              <figure class="preview__fig">
              <img src="${item.image_url}" alt="image" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${item.title}</h4>
                <p class="preview__publisher">${item.publisher}</p>
                <div class="preview__user-generated">
                  <svg>
                    <use href="${icons}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>`
  
resultsContainer.insertAdjacentHTML('afterbegin',html)
})
}
// sideSearch()


// elem()
// sideSearch("pizza")

// const result=await searchResults()


  // addEventListener('change',function()
  // {
  // console.log('hello')
  // let link=windows.location.hash.slice(1)
  // console.log(link)
  // })

// elements()

// const elements=function(container){
//     console.log(container,'container')
//     const html=<div class="recipe__details">
//     <div class="recipe__info">
//       <svg class="recipe__info-icon">
//         <use href="src/img/icons.svg#icon-clock"></use>
//       </svg>
//       <span class="recipe__info-data recipe__info-data--minutes">45</span>
//       <span class="recipe__info-text">minutes</span>
//     </div>
//     <div class="recipe__info">
//       <svg class="recipe__info-icon">
//         <use href="src/img/icons.svg#icon-users"></use>
//       </svg>
//       <span class="recipe__info-data recipe__info-data--people">4</span>
//       <span class="recipe__info-text">servings</span>
//       <div class="recipe__info-buttons">
//         <button class="btn--tiny btn--increase-servings">
//           <svg>
//             <use href="src/img/icons.svg#icon-minus-circle"></use>
//           </svg>
//         </button>
//         <button class="btn--tiny btn--increase-servings">
//           <svg>
//             <use href="src/img/icons.svg#icon-plus-circle"></use>
//           </svg>
//         </button>
//       </div>
//     </div>
//     <div class="recipe__user-generated">
//       <svg>
//         <use href="src/img/icons.svg#icon-user"></use>
//       </svg>
//     </div>`
//     // recipeContainer.innerHTML=''
//   recipeContainer.insertAdjacentElement('afterend',html)
// }


//  import icons from 'url:../../img/icons.svg';
// import 'regenerator-runtime';
// // import {JSON} from 'url:../js/model.js';
// import {link} from './config.js';
// import {view} from './views/mainRecipe.js';
// import {search} from './model.js';


// const recipeContainer = document.querySelector('.recipe');

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };


// // async function search(){
// // await search()
// // console.log(await search)
// // }
// // search()
// // https://forkify-api.herokuapp.com/v2

// ///////////////////////////////////////


// // const search=async function(){
// //   try{

// // const id=window.location.hash.slice(1)
// // const fetching=await fetch(`${JSON}${id}`)



// // // console.log(JSON)

// // const jay=await fetching.json()

// // // if(!fetching.ok) throw new Error(console.log(`${jay.status}`))

// // let {recipe}=jay.data

// // // console.log(jay.data.recipe)


// // const rec={
// //   cookingTime:recipe.cooking_time,
// //   servings:recipe.servings,
// //   url:recipe.image_url,
// // title: recipe.title,
// //   id: recipe.id,
// // ing:recipe.ingredients,
// // source:recipe.source_url,
// // }
// // /*
// // fn()*/
// // return rec
// //   }catch{console.log('catch error')}
// // };

// const renderSpinner= function(parentHolder){ 

//   const spin=`<div class="spinner">
// <svg>
//   <use href="${icons}#icon-loader"></use>
// </svg>
// </div>`;

// parentHolder.innerHTML='';
// parentHolder.insertAdjacentHTML('beforeend',spin)

// }



// const loadRecipe=async function(){
// try{
//   renderSpinner(recipeContainer)

//   if (!`${link}`) renderSpinner(recipeContainer)
  
//   // const awa = await `${search}`

// // console.log(awa)


// //   const elem=`<figure class="recipe__fig">
// //   <img src="${awa.url}" alt="Tomato" class="recipe__img" />
// //   <h1 class="recipe__title">
// //     <span>${awa.title}</span>
// //   </h1>
// // </figure>
// // <div class="recipe__details">
// //   <div class="recipe__info">
// //     <svg class="recipe__info-icon">
// //       <use href="${icons}#icon-clock"></use>
// //     </svg>
// //     <span class="recipe__info-data recipe__info-data--minutes">${awa.cookingTime}</span>
// //     <span class="recipe__info-text">minutes</span>
// //   </div>
// //   <div class="recipe__info">
// //     <svg class="recipe__info-icon">
// //       <use href="${icons}#icon-users"></use>
// //     </svg>
// //     <span class="recipe__info-data recipe__info-data--people">${awa.servings}</span>
// //     <span class="recipe__info-text">servings</span>
// //     <div class="recipe__info-buttons">
// //       <button class="btn--tiny btn--increase-servings">
// //         <svg>
// //           <use href="${icons}#icon-minus-circle"></use>
// //         </svg>
// //       </button>
// //       <button class="btn--tiny btn--increase-servings">
// //         <svg>
// //           <use href="${icons}#icon-plus-circle"></use>
// //         </svg>
// //       </button>
// //     </div>
// //   </div>
// //   <div class="recipe__user-generated">
// //     <svg>
// //       <use href="${icons}#icon-user"></use>
// //     </svg>
// //   </div>
// //   <button class="btn--round">
// //     <svg class="">
// //       <use href="${icons}#icon-bookmark-fill"></use>
// //     </svg>
// //   </button>
// // </div>
// // <div class="recipe__ingredients">
// //   <h2 class="heading--2">Recipe ingredients</h2>
// //   <ul class="recipe__ingredient-list">
  
// //   ${awa.ing.map(el=>
// //     `<li class="recipe__ingredient">
// //     <svg class="recipe__icon">
// //     <use href="${icons}#icon-check"></use>
// //   </svg>
// //   <div class="recipe__quantity">${el.quantity}</div>
// //   <div class="recipe__description">
// //     <span class="recipe__unit">${el.unit}</span>
// //     ${el.description}
// //   </div>
// //    </li>`
// //    ).join('')}
   
  
// //   </ul>
// // </div>
// // <div class="recipe__directions">
// //   <h2 class="heading--2">How to cook it</h2>
// //   <p class="recipe__directions-text">
// //     This recipe was carefully designed and tested by
// //     <span class="recipe__publisher">The Pioneer Woman</span>. Please check out
// //     directions at their website.
// //   </p>
// //   <a
// //     class="btn--small recipe__btn"
// //     href="${awa.source}}"
// //     target="_blank"
// //   >
// //     <span>Directions</span>
// //     <svg class="search__icon">
// //       <use href="${icons} #icon-arrow-right"></use>
// //     </svg>
// //   </a>
// // </div>`

//     recipeContainer.innerHTML=''
//     recipeContainer.insertAdjacentHTML('beforeend',`${view}`);
   
// }
// catch(err){console.log(err,'this is an error test')}
// }

// // console.log(parentHolder)

//   window.addEventListener('hashchange', search)


// // window.addEventListener('load',search)


// // .then(res=>res.json()).then(res=>console.log(res.data.recipe))


// async function fetchData(){
//   await loadRecipe()
// }
// fetchData()