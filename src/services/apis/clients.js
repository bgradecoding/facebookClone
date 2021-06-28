import axios from 'axios';
import { socialApiResponseInterceptor } from './helpers';

const SOCIAL_SERVER_URL = 'http://13.125.239.124:8080';

const socialApiClient = axios.create({
  baseURL: SOCIAL_SERVER_URL,
});

export { socialApiClient };
