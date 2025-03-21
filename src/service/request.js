import axios from 'axios'

const service = axios.create({
  baseURL: 'https://hotdl.xinjudata.com',
  timeout: 10000,
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default service
