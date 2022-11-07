import axios from 'axios'

  const Api = axios.create({
    baseURL : process.env.DEV ? "http://localhost:8686" : "https://koto-asiankitchen.de/api"
  })
  export default Api;
