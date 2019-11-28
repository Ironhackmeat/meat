window.onload = () => {
  const edamamAPI = new APIHandler("https://api.edamam.com/search?")
  const container = document.getElementsByClassName("recipe-container")[0]


  // ---------------------- changing to ONE function ------------------------//

  // document.getElementsByClass("recipe-filter").addEventListener('change', function() {
  //    forEach (elm => elm.checked) {
  //      edamamAPI.getFilter(elm).then(recipes => {
  //        container.innerHTML = ""
  //        for (let i = 0; i < recipes.length; i++) {
  //          container.innerHTML +=
  //            `<div class="recipe-info"> 
  //          <div class="name">${recipes[i].recipe.label}</div>
  //          <br>
  //          <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
  //          </div>
  //          <br> <hr> <br> 
  //        }
  //      })
  //    }
  // })

  // ------------------ filtering by checkboxes --------------------------//

  //   // full list of recipes
  document.getElementById('see-all').addEventListener('change', function () {
    if (this.checked) {
      edamamAPI.getFullList().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) { // foreach?
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    }
  })


  //   // gluten-free recipes
  document.getElementById('glutenFree').addEventListener('change', function () {
    if (this.checked) {
      edamamAPI.getFiltersGF().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) {
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    } else {
      edamamAPI.getFullList().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) { // foreach?
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    }
  })

  //   // Veg recipes
  document.getElementById('vegetarian').addEventListener('change', function () {
    if (this.checked) {
      edamamAPI.getFiltersVeg().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) {
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    } else {
      edamamAPI.getFullList().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) { // foreach?
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    }
  })

  //   // Vegan recipes
  document.getElementById('vegan').addEventListener('change', function () {
    if (this.checked) {
      edamamAPI.getFiltersVegan().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) {
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    } else {
      edamamAPI.getFullList().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) { // foreach?
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    }
  })

  //   // shellfish free recipes
  document.getElementById('shellfishFree').addEventListener('change', function () {
    if (this.checked) {
      edamamAPI.getFiltersShellfish().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) {
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    } else {
      edamamAPI.getFullList().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) { // foreach?
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    }
  })

  //   // nut free recipes
  document.getElementById('nutFree').addEventListener('change', function () {
    if (this.checked) {
      edamamAPI.getFiltersNuts().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) {
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    } else {
      edamamAPI.getFullList().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) { // foreach?
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    }
  })

  //   // dairy free recipes
  document.getElementById('dairyFree').addEventListener('change', function () {
    if (this.checked) {
      edamamAPI.getFiltersDairy().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) {
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    } else {
      edamamAPI.getFullList().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) { // foreach?
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    }
  })

  //   //breakfast
  document.getElementById('breakfast').addEventListener('change', function () {
    if (this.checked) {
      edamamAPI.getFiltersBreakfast().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) {
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    } else {
      edamamAPI.getFullList().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) { // foreach?
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    }
  })

  //   //lunch
  document.getElementById('lunch').addEventListener('change', function () {
    if (this.checked) {
      edamamAPI.getFiltersLunch().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) {
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    } else {
      edamamAPI.getFullList().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) { // foreach?
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    }
  })

  //   //snack
  document.getElementById('snack').addEventListener('change', function () {
    if (this.checked) {
      edamamAPI.getFiltersSnack().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) {
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    } else {
      edamamAPI.getFullList().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) { // foreach?
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    }
  })

  //   //dinner
  document.getElementById('dinner').addEventListener('change', function () {
    if (this.checked) {
      edamamAPI.getFiltersDinner().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) {
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    } else {
      edamamAPI.getFullList().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) { // foreach?
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    }
  })

  //   //balanced
  document.getElementById('balanced').addEventListener('change', function () {
    if (this.checked) {
      edamamAPI.getFiltersBalanced().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) {
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    } else {
      edamamAPI.getFullList().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) { // foreach?
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    }
  })

  //   //protein
  document.getElementById('highProtein').addEventListener('change', function () {
    if (this.checked) {
      edamamAPI.getFiltersProtein().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) {
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    } else {
      edamamAPI.getFullList().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) { // foreach?
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    }
  })

  //   //carb
  document.getElementById('lowCarb').addEventListener('change', function () {
    if (this.checked) {
      edamamAPI.getFiltersCarb().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) {
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    } else {
      edamamAPI.getFullList().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) { // foreach?
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    }
  })

  //   //fat
  document.getElementById('lowFat').addEventListener('change', function () {
    if (this.checked) {
      edamamAPI.getFiltersFat().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) {
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    } else {
      edamamAPI.getFullList().then(recipes => {
        container.innerHTML = ""
        for (let i = 0; i < recipes.length; i++) { // foreach?
          container.innerHTML +=
            `<div class = "container">
              <div class="row recipe-info"> 
                <div class="col-md-4 img">
                    <img src="${recipes[i].recipe.image}" alt="recipeimg">
                </div>
            <br>
                <div class="col-md-6">
                  <div class="name">${recipes[i].recipe.label}</div>
            <br>
                  <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
                </div>
            </div>
            <br> <hr> <br>`
        }
      })
    }
  })

}