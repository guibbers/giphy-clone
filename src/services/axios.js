import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs/`,
})

const searchURL = (firstParam, keyWord, limit, offset) => {
  return `${firstParam}?api_key=${process.env.VUE_APP_ENV_VARIABLE}&q=${keyWord}&limit=${limit}&offset=${offset}`
}

export default {
  getGifs(keyWord, limit, offset) {
    if (keyWord) {
      return apiClient.get(searchURL('search', keyWord, limit, offset))
    } else {
      return apiClient.get(searchURL('trending', keyWord, limit, offset))
    }
  },
}
