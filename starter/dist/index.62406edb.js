const recipeContainer = document.querySelector(".recipe");
window.addEventListener("hashchange", fetchData);
async function fetchData() {
    let link = window.location.hash.slice(1);
    const theFetch = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${link}`);
    console.log(theFetch);
    const JSON = await theFetch.json();
    let container = await JSON.data.recipe;
    elements(container);
}
const elements = function(recipeItems) {
    console.log(recipeItems);
    let html = `<div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${src / img / icons.svg}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">45</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${src / img / icons.svg}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">4</span>
        <span class="recipe__info-text">servings</span>
        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${src / img / icons.svg}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${src / img / icons.svg}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="recipe__user-generated">
        <svg>
          <use href="${src / img / icons.svg}#icon-user"></use>
        </svg>
      </div>`;
    //////////////////////////////////
    recipeContainer.innerHTML = "";
    recipeContainer.insertAdjacentHTML("afterbegin", html);
} // addEventListener('change',function()
 // {
 // console.log('hello')
 // let link=windows.location.hash.slice(1)
 // console.log(link)
 // })
 // elements()
 // const elements=function(container){
 //     console.log(container,'container')
 //     const html=`<div class="recipe__details">
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
 // async function init(){
 //   await loadRecipe()
 // }
 // init()
;

//# sourceMappingURL=index.62406edb.js.map
