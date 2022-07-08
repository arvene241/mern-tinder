import axios from "axios";

const instance = axios.create({
  baseURL: "https://mern-tinder-backendd.herokuapp.com",
});

export default instance;
