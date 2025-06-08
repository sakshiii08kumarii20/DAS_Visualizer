import axios from 'axios';

export const bubbleSortAPI = async (array) => {
  const res = await axios.post('http://localhost:8080/api/sort/bubble', array);
  return res.data;
};
