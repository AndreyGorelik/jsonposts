import Axios from 'axios';

import { API_ROUTES } from './constants';

const axios = Axios.create({
  baseURL: API_ROUTES.baseURL,
});

export default axios;
