class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL + "?q=all&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100")
      .then(response => response.data.hits)

  }

  getFiltersGF() {
    return axios.get(this.BASE_URL + "?q=health=gluten-free&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100")
      .then(response => response.data.hits)
  }

  getFiltersVeg() {
    return axios.get(this.BASE_URL + "?q=health=vegetarian&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100")
      .then(response => response.data.hits)
  }

  getFiltersVegan() {
    return axios.get(this.BASE_URL + "?q=health=vegan&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100")
      .then(response => response.data.hits)
  }

  getFiltersDairy() {
    return axios.get(this.BASE_URL + "?q=health=dairy-free&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100")
      .then(response => response.data.hits)
  }

  getFiltersShellFish() {
    return axios.get(this.BASE_URL + "?q=health=shellfish-free&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100")
      .then(response => response.data.hits)
  }

  getFiltersNuts() {
    return axios.get(this.BASE_URL + "?q=health=tree-nut-free&health=peanut-free&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100")
      .then(response => response.data.hits)
  }
}





// const api = axios.create ({
//   baseURL: "https://api.edamam.com/search"
// })

//   getFullList() {
//     return axios.get(`${this.api.baseURL}?q=all&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3`)
//       .then(responseFromAPI => {
//         console.log('Response from API is: ', responseFromAPI.data)

//         return responseFromAPI.data
//       })
//   }

// module.exports = APIHandler