const { default: axios } = require("axios");

const userAPI = axios.defaults.baseURL("http://localhost:4000/api");

export default userAPI;