const axios = require('axios');
URL = 'http://localhost:3000';

const getUsers = async () => {
  const response = await axios.get(`${URL}/users`)
  console.log(response.data);
}

const logInUser = async (user_id) => {
  try {
    const response = await axios(`${URL}/users/${user_id}`)
    if (response.status === 200) {
      console.log('user found');
    }
  } catch (e) {
    console.error(e.message);
  }
}

const createUser = async (data) => {
  try {
    const response = await axios.post(`${URL}/users`, data)
    console.log(response);
  } catch(e){
    console.error(e.message);
  }
}
