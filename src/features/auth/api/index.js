import { axiosInstance } from '../../../services/api/axiosInstance';
import { getLocalStorage } from '../../../services/localStorage';

export const AuthApiMethod = {
  login: (data) => {
    const url = `/Accounts/login`;
    return axiosInstance.post(url, data);
  },

  register: (data) => {
    const url = `/Accounts`;
    return axiosInstance.post(url, data);
  },

  getUserInfo: (id) => {
    const url = `Accounts/${id}?access_token=${getLocalStorage('currentId')}`;
    return axiosInstance.get(url);
  },

  changePassword: (data) => {
    const url = `Accounts/change-password?access_token=${getLocalStorage(
      'currentId'
    )}`;
    return axiosInstance.post(url, data);
  },

  editUser: (data) => {
    const url = `/Accounts?access_token=${getLocalStorage('currentId')}`;
    return axiosInstance.put(url, data);
  },
};
