import axios from "axios";

export const Api = axios.create({
    baseURL: "http://192.168.1.115:5000/api"
});