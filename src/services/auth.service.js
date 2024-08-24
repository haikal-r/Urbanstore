import { axiosClient, axiosPrivate } from "@/lib/axios";
import toast from "react-hot-toast";

export const loginAPI = async (user) => {
  try {
    
    const response = await axiosClient.post(`/login`, {
      email: user.email,
      password: user.password
    })

    return response.data
  } catch (error) {
    throw error;
  }
}


export const registerAPI = async (user) => {
  try {
    return await axiosClient.post(`/register`, {
      email: user.email,
      password: user.password,
      username: user.username,
      name: user.name,
    })
  } catch (error) {
    throw error
  }
} 


export const fetchUserInfo = async (token) => {
  try {
    const response = await axiosClient.get('/me', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data.data
  } catch (error) {
    toast.error('Error fetching user data')
  }
};




