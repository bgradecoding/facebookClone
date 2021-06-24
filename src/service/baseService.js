import axios from 'axios';

export const baseService = async ({ url, method, data }) => {
  const baseURL = 'http://13.125.239.124:8080/';
  const response = await axios({
    url: baseURL + url,
    method: method,
    data,
  });
  if (response) return response;
};
