import axiosInstance from "./api.services";
import { SigninRequest, SignInResponse } from "../types/api/auth.types";

export const signin =(data: SigninRequest)=>{
    return axiosInstance.post<SignInResponse>("/auth/login?platform=admin", data);
};
