window.onload = () => {
  const edamamAPI = new APIHandler("https://api.edamam.com/search?")
  const container = document.getElementsByClassName("fridge-container")[0]

  document.getElementById("fridgeButton").onclick = () => {

    const ingredients = document.getElementById('ingredients').value
    edamamAPI.getIngredients(ingredients).then(recipes => {
      container.innerHTML = ""
      for (let i = 0; i < recipes.length; i++) { // foreach?
        container.innerHTML +=
          `<div class="row recipe-info">
            <div class="col-md-4 img">
              <img src="${recipes[i].recipe.image}" alt="recipeimg">
            </div>
          <br>
            <div class="col-md-6">
              <div class="name">
                <p>${recipes[i].recipe.label}</p>
              </div>
          <br>
              <div class="url">
                <a href="${recipes[i].recipe.url}"> See the full recipe </a>
              </div>
            </div>
          </div>
          <br> <hr> <br> `
      }
    })
  }
}