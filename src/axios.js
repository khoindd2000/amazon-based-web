import axios from "axios";

const instance = axios.create({
    // baseURL: '...' //... mean no api (cloud function) url
    baseURL: "http://localhost:5001/clone-database/us-central1/api"
});

export default instance;