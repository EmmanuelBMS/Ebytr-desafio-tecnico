import Axios from 'axios';

const api = Axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_PORT || 3001}`,
});

const getTasksAPI = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

const updateTaskAPI = async (endpoint, body) => {
  await api.patch(endpoint, body);
};

const deleteTaskAPI = async (endpoint) => {
  await api.delete(endpoint);
};

const createTaskAPI = async (endpoint, body) => {
  await api.post(endpoint, body);
};

export {
  getTasksAPI,
  updateTaskAPI,
  deleteTaskAPI,
  createTaskAPI,
};
