import axios from 'axios';

export const getDatafromApi = (url) => {
    return axios.get(url);
}