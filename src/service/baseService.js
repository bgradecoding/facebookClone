import axios from 'axios';

export const callAPI = async ({url, method, data}) => {
  const baseURL = 'http://13.125.239.124:8080/'
  const response = await axios({
    method : method,
    url: baseURL + url,
    data,
  });
  return response;
};