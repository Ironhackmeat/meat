window.onload = () => {
  const edamamAPI = new APIHandler("https://api.edamam.com/search")
  const container = document.getElementsByClassName("recipe-container")[0]



  // ------------------ filtering by checkboxes --------------------------//


  // full list of recipes
  document.getElementById('see-all').addEventListener('change', function () {
    if (this.checked) {
      edamamAPI.getFullList().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) { // foreach?
          container.innerHTML +=
            `<div class="recipe-info"> 
      <div class="name">${recipes[i].recipe.label}</div>
      <br>
      <div class="occupation">${recipes[i].recipe.url}</div>
      </div>
      <br> <hr> <br> `
        }
      })
    }
  })


  // gluten-free recipes
  document.getElementById('glutenFree').addEventListener('change', function () {
    if (this.checked) {
      edamamAPI.getFiltersGF().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) {
          container.innerHTML +=
            `<div class="recipe-info"> 
           <div class="name">${recipes[i].recipe.label}</div>
           <br>
           <div class="occupation">${recipes[i].recipe.url}</div>
           </div>
           <br> <hr> <br> `
        }
      })
    }
  })

  // Veg recipes
  document.getElementById('vegetarian').addEventListener('change', function () {
    if (this.checked) {
      edamamAPI.getFiltersVeg().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) {
          container.innerHTML +=
            `<div class="recipe-info"> 
           <div class="name">${recipes[i].recipe.label}</div>
           <br>
           <div class="occupation">${recipes[i].recipe.url}</div>
           </div>
           <br> <hr> <br> `
        }
      })
    }
  })

  // Vegan recipes
  document.getElementById('vegan').addEventListener('change', function () {
    if (this.checked) {
      edamamAPI.getFiltersVegan().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) {
          container.innerHTML +=
            `<div class="recipe-info"> 
           <div class="name">${recipes[i].recipe.label}</div>
           <br>
           <div class="occupation">${recipes[i].recipe.url}</div>
           </div>
           <br> <hr> <br> `
        }
      })
    }
  })

  // shellfish free recipes
  document.getElementById('shellfishFree').addEventListener('change', function () {
    if (this.checked) {
      edamamAPI.getFiltersShellfish().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) {
          container.innerHTML +=
            `<div class="recipe-info"> 
           <div class="name">${recipes[i].recipe.label}</div>
           <br>
           <div class="occupation">${recipes[i].recipe.url}</div>
           </div>
           <br> <hr> <br> `
        }
      })
    }
  })

  // nut free recipes
  document.getElementById('nutFree').addEventListener('change', function () {
    if (this.checked) {
      edamamAPI.getFiltersNuts().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) {
          container.innerHTML +=
            `<div class="recipe-info"> 
           <div class="name">${recipes[i].recipe.label}</div>
           <br>
           <div class="occupation">${recipes[i].recipe.url}</div>
           </div>
           <br> <hr> <br> `
        }
      })
    }
  })

  // dairy free recipes
  document.getElementById('dairyFree').addEventListener('change', function () {
    if (this.checked) {
      edamamAPI.getFiltersDairy().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) {
          container.innerHTML +=
            `<div class="recipe-info"> 
           <div class="name">${recipes[i].recipe.label}</div>
           <br>
           <div class="occupation">${recipes[i].recipe.url}</div>
           </div>
           <br> <hr> <br> `
        }
      })
    }
  })

}