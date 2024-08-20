import { axiosClient, axiosPrivate } from "@/lib/axios";
import axios from "axios"

//* TODO: create password confirmation to register

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

export const loginGoogleAPI = async () => {
  
  try {
    const response =  await axios.get(`api/v1/auth/google/callback`)
    
    return response
  } catch (e) {
    throw e;
  }
}



export const logoutAPI = async () => {
  try {
      return await axiosPrivate.post(`/logout`)
  
    } catch (e) {
      throw e
    }
  }

  export const refreshTokenAPI = async () => {
    try {
      return await axiosPrivate.get(`/refresh-token`)
    } catch (error) {
      throw error
    }
  }


  export const profileAPI = async () => {
    try {
        return await axiosPrivate.get(`/me`);

      
    } catch (e) {
        throw e;
    }
};

