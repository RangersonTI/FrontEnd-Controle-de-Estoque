import axios from "axios";
import { appConfig } from "../configs";

export const Api = axios.create({
    baseURL: import.meta.env.PROD
        ? `http://${window.location.hostname}:5000${appConfig.BASENAME}/api`
        : "http://192.168.1.113:5000/api"
});