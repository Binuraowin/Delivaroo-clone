import axios from 'axios';
const BASE_URL = "http://localhost:3003/api"

export async function makeResponse(URL) {
  try {
    const authToken = localStorage.getItem('authToken');

    const response = await axios.get(`${BASE_URL}/v1/${URL}`, {
      headers: {
        'Authorization': `${authToken}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export const token = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/token`);
      return response.data.accessToken;
    } catch (error) {
      throw new Error('Invalid credentials');
    }
  };