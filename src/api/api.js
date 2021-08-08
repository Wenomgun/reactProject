import axios from "axios";
import db from "../Redux/db";

const baseURL = 'https://social-network.samuraijs.com/api/1.0';

const axiosInst = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        "API-KEY": '64031e7a-e449-4038-b4ec-a5b100e98af5'
    }
});

export const api = {
    getUsers: (page = 1) => {
        return axiosInst.get(`/users?page=${page}`)
            .then((resp) => resp.data);
    },
    changedFollowed: (id, isFollowed) => {
        if (isFollowed) {
            return axiosInst.delete(`/follow/${id}`);
        } else {
            return axiosInst.post(`/follow/${id}`);
        }
    },
    authMe: () => {
        return axiosInst.get('/auth/me');
    },
    authLogin: (loginData) => {
        return axiosInst.post('/auth/login', {
            email: loginData.email,
            password: loginData.password,
            rememberMe: loginData.rememberMe,
            captcha: loginData.captcha
        });
    },
    authLogout: () => {
        return axiosInst.delete('/auth/login');
    },
    getUserProfile: (userId) => {
        return axiosInst.get(`/profile/${userId}`)
            .then((resp) => resp.data);
    },
    getProfileStatus: (userId) => {
        return axiosInst.get(`/profile/status/${userId}`)
            .then((resp) => {
                return resp.data
            });
    },
    changeProfileStatus: (status) => {
        return axiosInst.put(`/profile/status`, {
            status
        }).then((resp) => {
                return resp.data
            });
    },
    changeProfilePhoto: (file) => {
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
    setProfileDetail: (newDetails) => {
        return axiosInst.put('profile', JSON.stringify(newDetails), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp) => {
            return resp.data
        })
    }
}