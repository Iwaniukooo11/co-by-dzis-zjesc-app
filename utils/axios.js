import axios from 'axios'

const instance = axios.create({
  baseURLl: '192.168.1.15:3000/api/v1',
})

export default instance
