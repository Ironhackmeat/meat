window.onload = () => {
  const edamamAPI = new APIHandler("https://api.edamam.com/search")
  const container = document.getElementsByClassName("recipe-container")[0]
  console.log(document)

  document.getElementById('see-list').addEventListener('click', function (event) {
    edamamAPI.getFullList().then(recipes => {
      console.log(recipes, 'wtf is this')
      container.innerHTML = ""
      for (let i = 0; i < recipes.length; i++) {
        container.innerHTML +=
          `<div class="recipe-info"> 
      <div class="name">${recipes[i].recipe.label}</div>
      <div class="occupation">${recipes[i].recipe.url}</div>
      </div>`;
      }
    });
  });
}








// const API = require('../javascripts/APIhandler')

//   document.getElementById('see-list').onclick = function () {
//      document.getElementsByClassName("recipe-container")[0].innerHTML = response.data[0].label
//     edamamsAPI.getFullList()
//   }

// $(document).ready(() => {
//       let container = document.getElementsByClassName("recipe-container")[0]

//       function replaceContainer(extraDiv, ) {
//         const div = `<div>${extraDiv}</div></div><div class="recipe-info"><div class="name">Recipe Name: ${label}</div><div class="img">${img}</div>`
//         container.innerHTML += div
//       }

//       document.getElementById('recipe-list').onclick = function () {
//         edamamAPI.getFullList()
//           .then(fullList => {
//             container.innerHTML = ""
//             fullList.forEach(elm => {
//               replaceContainer("", elm.label, )
//             })
//           })
//         }})