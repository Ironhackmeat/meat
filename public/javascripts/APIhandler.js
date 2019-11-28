class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  // -------------------- FILTERING BY CHECKBOXES -------------------------------//

  // getFilter(query = "", ...rest) {
  //   return axios.get(this.BASE_URL + `q=${query}&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100`)
  //  .then(response => response.data.hits)
  // }
// ----------------------------------------------------------- //
  
  getFullList() {
    return axios.get(this.BASE_URL + "q=all&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100")
      .then(response => response.data.hits)
  }

  // //requirements
  getFiltersGF() {
    return axios.get(this.BASE_URL + "q=gluten&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100")
      .then(response => response.data.hits)
  }

  getFiltersVeg() {
    return axios.get(this.BASE_URL + "q=vegetarian&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100")
      .then(response => response.data.hits)
  }

  getFiltersVegan() {
    return axios.get(this.BASE_URL + "q=vegan&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100")
      .then(response => response.data.hits)
  }

  getFiltersDairy() {
    return axios.get(this.BASE_URL + "q=&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100&=health=dairy-free")
      .then(response => response.data.hits)
  }

  getFiltersShellfish() {
    return axios.get(this.BASE_URL + "q=&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100&health=shellfish-free")
      .then(response => response.data.hits)
  }

  getFiltersNuts() {
    return axios.get(this.BASE_URL + "q=&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100&health=tree-nut-free")
      .then(response => response.data.hits)
  }

  // //mealtype

  getFiltersBreakfast() {
    return axios.get(this.BASE_URL + "q=breakfast&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100")
      .then(response => response.data.hits)
  }

  getFiltersLunch() {
    return axios.get(this.BASE_URL + "q=lunch&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100")
      .then(response => response.data.hits)
  }

  getFiltersSnack() {
    return axios.get(this.BASE_URL + "q=snack&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100")
      .then(response => response.data.hits)
  }

  getFiltersDinner() {
    return axios.get(this.BASE_URL + "q=dinner&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100")
      .then(response => response.data.hits)
  }

  // //DIET
  getFiltersBalanced() {
    return axios.get(this.BASE_URL + "q=&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100&diet=balanced")
      .then(response => response.data.hits)
  }

  getFiltersProtein() {
    return axios.get(this.BASE_URL + "q=&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100&diet=high-protein")
      .then(response => response.data.hits)
  }

  getFiltersCarb() {
    return axios.get(this.BASE_URL + "q=&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100&diet=low-carb")
      .then(response => response.data.hits)
  }

  getFiltersFat() {
    return axios.get(this.BASE_URL + "q=&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100&diet=low-fat")
      .then(response => response.data.hits)
  }

  // // -------------------------- SEARCH WHAT IS IN YOUR FRIDGE ------------------------------- //

  getIngredients(ingredients) {
    return axios.get(this.BASE_URL + `q=${ingredients}&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100`)
      .then(response => response.data.hits)
  }


}