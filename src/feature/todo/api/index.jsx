import { axiosInstance } from '../../../services/api/axiosInstance';
import { getLocalStorage } from '../../../services/localStorage';

export const todoApiMethod = {
  addTodo: (data) => {
    const url = `/todos?access_token=${getLocalStorage('currentId')}`;
    return axiosInstance.post(url, data);
  },

  editTodo: (data) => {
    const url = `/todos?access_token=${getLocalStorage('currentId')}`;
    return axiosInstance.put(url, data);
  },

  getAllTodo: () => {
    return axiosInstance.get(
      `todos/?access_token=${getLocalStorage('currentId')}`
    );
  },

  getOneTodo: (id) => {
    return axiosInstance.get(
      `todos/${id}?access_token=${getLocalStorage('currentId')}`
    );
  },

  deleteTodo: (id) => {
    return axiosInstance.delete(
      `todos/${id}?access_token=${getLocalStorage('currentId')}`
    );
  },
};
