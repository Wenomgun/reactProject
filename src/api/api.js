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
    getUserProfile: (userId) => {
        return axiosInst.get(`/profile/${userId}`)
            .then((resp) => resp.data);
    }
}