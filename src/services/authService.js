import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

// Users
const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data);
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data);

export { registerUserService, loginUserService };

/*const config = {
  headers: { Authorization: `${token}` }
}
//const getDataUser = (id) => axios.get(`${BASE_URL}/user/{${id}`, config)
*/
