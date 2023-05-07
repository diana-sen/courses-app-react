import axios from 'axios';

//
const BASE_URL = 'http://localhost:4000';
//const token = window.localStorage.getItem('token')
/*const config = {
  headers: { Authorization: `JWT ${token}` }
} */

// Users
const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data);
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data);
//const getDataUser = (id) => axios.get(`${BASE_URL}/user/{${id}`, config)

export {
	registerUserService,
	loginUserService,
	//getDataUser,
};
