window.onload = () => {
  const edamamAPI = new APIHandler("https://api.edamam.com/search?")
const container = document.getElementsByClassName("fridge-container")[0]
  
document.getElementById("fridgeButton").onclick = () => {

    const ingredients = document.getElementById('ingredients').value
    edamamAPI.getIngredients(ingredients).then(recipes => {
      container.innerHTML = ""
      for (let i = 0; i < recipes.length; i++) { // foreach?
        container.innerHTML +=
          `<div class="recipe-info">
      <div class="name">${recipes[i].recipe.label}</div>
      <br>
       <div class="url"><a href = "${recipes[i].recipe.url}"> See the full recipe </a></div>
      </div>
      <br> <hr> <br> `
      }
    })
  }
}