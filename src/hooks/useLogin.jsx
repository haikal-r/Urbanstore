import { useState, useEffect } from "react";
import { getUsername } from "../services/auth.service";

export const useLogin = () => {
    const [username, setUsername] = useState("")
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(!token){
            window.location.href = "/login";
        }
        setUsername(getUsername(token))
      },[])

      return username;
}