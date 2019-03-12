import axios from 'axios'

 const API_URL = 'https://ironbeer-api.herokuapp.com/beers/'

 const http = axios.create({
  baseURL: API_URL
})

 const ListBeers = () => {
  return http.get(`/all`)
}
const randomBeer = () => {
  return http.get('/random')
}
const detailBeer = (id) => {
  return http.get(`/single/${id}`)
}
const addBeer = (beer) => {
 return http.post("/new", beer)
}
const searchBeer = (search) => {
  return http.get(`/search?q=${search}`)
 }

 // const ListBeers = () => {
//  return axios.get(`${API_URL}`)
//  }

 export {ListBeers, randomBeer, detailBeer,addBeer,searchBeer};