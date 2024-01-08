import axios from 'axios'

// import { APIKey } from './MovieApiKey'

export default axios.create({
    baseURL:"http://www.omdbapi.com/"
})