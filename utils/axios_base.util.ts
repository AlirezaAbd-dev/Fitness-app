import axios from 'axios';

const axiosBase = axios.create({
  baseURL: 'https://backend-fitnessapp.ehsndvr.top/api',
});

export default axiosBase;
