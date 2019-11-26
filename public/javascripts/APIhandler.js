class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

// -------------------- filtering by checkboxes -------------------------------//

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

  getFiltersShellfish() {
    return axios.get(this.BASE_URL + "?q=&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100&excluded=fish")
      .then(response => response.data.hits)
  }

  getFiltersNuts() {
    return axios.get(this.BASE_URL + "?q=health=peanut-nut-free&app_id=edb96150&app_key=8a70cb8c5186d89d4e451e5f99236bb3&from=0&to=100")
      .then(response => response.data.hits)
  }
}





