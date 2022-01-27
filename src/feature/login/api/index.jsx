import { axiosInstance } from "../../../services/api/axiosInstance";


export const LoginApiMethod = {
  login: (data) => {
    console.log("check", data)
    const url = `/Accounts/login`;
    return axiosInstance.post(url, data)
  },

  register: (data) => {
    console.log("check", data)
    const url = `/Accounts/replaceOrCreate`;
    return axiosInstance.post(url, data)
  }
}