class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL + "?q=all&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&offset=100")
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