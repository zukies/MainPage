`<li class="preview">
<a class="preview__link preview__link--active" href="#${element.id}">
   <figure class="preview__fig">
     <img src="${element.image_url}" alt="img" />
   </figure>
   <div class="preview__data">
     <h4 class="preview__title">${element.title}</h4>
     <p class="preview__publisher">${element.publisher}</p>
     <div class="preview__user-generated">
       <svg>
         <use href="${icons}#icon-user"></use>
       </svg>
     </div>
   </div>
  
</li>`