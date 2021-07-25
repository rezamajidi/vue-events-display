import axios from "axios";
import router from "../router";

const BASE_URL = process.env.VUE_APP_API_BASE_URL

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    },
    withCredential: true,
    auth: {
        username: process.env.VUE_APP_API_USERNAME,
        password: process.env.VUE_APP_API_PASSWORD
    }
})

instance.interceptors.response.use(
    response => {
        switch (response.status) {
            case 400:
                router.push("/login");
                return;
            case 401:
                router.push("/login");
                return;
            case 404:
                router.push("/404");
                return;
            default:
                return response.data; // Return the data returned in the response, so that the request is received normally (release, let the response pass through the interceptor)
        }
    },
       error => {//When the response is wrong
            router.push("/login");
            return Promise.reject(error);
    }
);

export default instance