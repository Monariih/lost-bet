import axios from 'axios'

const api = axios.create({
    baseURL: 'https://lost-bet-c9bf9ab778a8.herokuapp.com/', //url base da sua api
});

export default api