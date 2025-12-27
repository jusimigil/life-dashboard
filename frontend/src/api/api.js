import axios from "axios";

const BASE_URL = "http://192.168.1.66:8000"; // Change to deployed backend URL later

export const saveDailyTasks = async (tasks) => {
  return axios.post(`${BASE_URL}/daily-tasks`, tasks);
};

export const saveFinance = async (finance) => {
  return axios.post(`${BASE_URL}/finance`, finance);
};

export const fetchProgress = async () => {
  const res = await axios.get(`${BASE_URL}/progress`);
  return res.data;
};
