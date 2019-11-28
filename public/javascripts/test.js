window.onload = () => {
  const edamamAPI = new APIHandler("https://api.edamam.com/search?")
  const container = document.getElementsByClassName("recipe-container")[0]

  const query = query
  const check = [vegetarian, vegan, glutenFree]

  onclick => APIHandler(query, )
  
  // ------------------ filtering by checkboxes --------------------------//
  
  check.forEach((elm) => {
    document.getElementById(elm).addEventListener('change', function () {
      if (this.checked) {
        edamamAPI.getFullList().then(recipes => {
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
    })
  })
}