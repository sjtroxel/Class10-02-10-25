function renderRecipes(listRecipes) {
    const recipesHTML = listRecipes
      .map((recipe) => `
        <div class="recipe-container">
          <div class="recipe-image-container">
            <img class="recipe-image" src="${recipe.image}" alt="${recipe.title}">
          </div>
          <div class="recipe-details">
            <div class="recipe-title limit-text-to-2-lines">
              ${recipe.title}
            </div>
            <div class="recipe-description">
              ${recipe.description}
            </div>
            <div class="recipe-ingredients">
              Ingredients: ${recipe.ingredients}
            </div>
            <div class="recipe-steps">
              Steps: ${recipe.steps}
            </div>
          </div>
          <button class="add-to-favorites-button button-primary js-add-to-favorites" 
          data-recipe-id="${recipe.id}">
            Add to Favorites
          </button>
        </div>
      `)
      .join("");
  
    const recipesGrid = document.querySelector('.js-recipes-grid');
    recipesGrid.innerHTML = recipesHTML;
  }
  