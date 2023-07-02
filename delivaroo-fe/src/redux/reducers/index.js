import axios from 'axios';
const BaseURL = "http://localhost:3003/api/v1"

export async function makeResponse(URL) {
  try {
    const authToken = localStorage.getItem('authToken');

    const response = await axios.get(`${BaseURL}/${URL}`, {
      headers: {
        'Authorization': `${authToken}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}
