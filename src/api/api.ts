import axios, {AxiosResponse} from "axios";
import {ProfileDataType} from "../components/Profile/ProfileContainer";
import {ApiGetUsersType, ApiLogin, ApiResponse} from "../Types/Types";

const baseURL = 'https://social-network.samuraijs.com/api/1.0';

const axiosInst = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        "API-KEY": '64031e7a-e449-4038-b4ec-a5b100e98af5'
    }
});

export const api = {
    getUsers: (page = 1): Promise<ApiGetUsersType> => {
        return axiosInst.get(`/users?page=${page}`)
            .then((resp: AxiosResponse<ApiGetUsersType>) => {
                return resp.data;
            });
    },
    changedFollowed: (id: number, isFollowed: boolean): Promise<ApiResponse> => {
        if (isFollowed) {
            return axiosInst.delete(`/follow/${id}`);
        } else {
            return axiosInst.post(`/follow/${id}`);
        }
    },
    authMe: (): Promise<ApiResponse> => {
        return axiosInst.get('/auth/me');
    },
    getCaptcha: (): Promise<{url: string}> => {
        return axiosInst.get('/security/get-captcha-url');
    },
    authLogin: (loginData: ApiLogin): Promise<ApiResponse> => {
        return axiosInst.post('/auth/login', {
            email: loginData.email,
            password: loginData.password,
            rememberMe: loginData.rememberMe,
            captcha: loginData.captcha
        });
    },
    authLogout: (): Promise<ApiResponse> => {
        return axiosInst.delete('/auth/login');
    },
    getUserProfile: (userId: number): Promise<ApiResponse> => {
        return axiosInst.get(`/profile/${userId}`)
            .then((resp) => resp.data);
    },
    getProfileStatus: (userId: number): Promise<ApiResponse> => {
        return axiosInst.get(`/profile/status/${userId}`)
            .then((resp) => {
                return resp.data
            });
    },
    changeProfileStatus: (status: string): Promise<ApiResponse> => {
        return axiosInst.put(`/profile/status`, {
            status
        }).then((resp) => {
                return resp.data
            });
    },
    changeProfilePhoto: (file: any): Promise<ApiResponse> => {
        const formData = new FormData();
        formData.append("image", file);
        return axiosInst.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((resp) => {
            return resp.data
        })
    },
    setProfileDetail: (newDetails: ProfileDataType): Promise<ApiResponse> => {
        return axiosInst.put('profile', JSON.stringify(newDetails), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp) => {
            return resp.data
        })
    }
}