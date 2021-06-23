import { baseService } from './commonService';

export const getConnections = async () => {
  return await baseService({
    url: '/api/user/connections',
    method: 'get'
  });
};

export const checkEmailExistence = async (pEmail) => {
  return await baseService({
    url: '/api/user/exists',
    method: 'post',
    data: { address : pEmail }
  });
};

export const signUp = async (pJoinData) => {
  return await baseService({
    url: '/api/user/join',
    method: 'post',
    data: pJoinData
  });
};

export const getMyInfo = async () => {
  return await baseService({
    url: '/api/user/me',
    method: 'get'
  });
};