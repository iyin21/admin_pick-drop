import axios from "axios";
import { Error } from "../types/api";

const BASE_URL="https://pick-n-drop-dev.apps.rokswood.com/v1/";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
})

let EXPIRYINTERCEPTOR: number;

export const setAccessToken = (token: string) => {
	axiosInstance.defaults.headers.common["Token"] =  `${token}`;
};
export const removeAccessToken = () => {
	axiosInstance.defaults.headers.common["Token"] = undefined;
};

export const setExpiryInterceptor = (callback: () => Promise<void>) => {
	if (EXPIRYINTERCEPTOR) axiosInstance.interceptors.request.eject(EXPIRYINTERCEPTOR);
	EXPIRYINTERCEPTOR = axiosInstance.interceptors.response.use(null, (error: Error) => {
		const errorMessage = error.message|| "";
		console.log("dd", errorMessage)
		if (errorMessage.includes("unauthorized") || errorMessage.includes("Request failed with status code 401")) {
			callback()
				.then(() => null)
				.catch(() => null);
		}
		return Promise.reject(error);
	});
};

export default axiosInstance;