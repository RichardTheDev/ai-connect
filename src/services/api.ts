import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000'; 

export const getSomeData = async (): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/generate/graph`);
    return response.data;
  } catch (error) {
    // Handle error
    throw error;
  }
};

export const generateList = async (data: any): Promise<any> => {
    try {
      const response = await axios.post(`${API_BASE_URL}/generate/list`, data);
      return response.data;
    } catch (error) {
      // Handle error
      throw error;
    }
  };
  
// Add more API functions as needed
