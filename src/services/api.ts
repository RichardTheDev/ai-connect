import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000'; 

export const generateGraph = async (data: any): Promise<any> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/generate/graph`, data);
    return response.data;
  } catch (error) {
    return "Can't get the data"
  }
};

export const generateList = async (data: any): Promise<any> => {
    try {
      const response = await axios.post(`${API_BASE_URL}/generate/list`, data);
      return response.data;
    } catch (error) {
      return "Can't get the data"
    }
  };
  
