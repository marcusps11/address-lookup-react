import axios from 'axios';
const API_KEY=
const API_URL ='https://api.getAddress.io/find'

const httpService = {

  getAddressData(query) {
    return axios.get(`${API_URL}/${query}?api-key=${API_KEY}`)
      .then(response => response)
      .catch(err => err)
  }
}

export default httpService
