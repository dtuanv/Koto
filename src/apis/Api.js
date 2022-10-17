import axios from 'axios'

  const Api = axios.create({
    baseURL : 'http://localhost:8688/'
  })
  export default Api;
