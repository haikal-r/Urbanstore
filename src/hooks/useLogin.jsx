import { useState, useEffect } from "react";
import { getUsername } from "../services/auth.service";
import { getUsers } from "../services/auth.service"; 
 
export const useLogin = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [dataUser, setDataUser] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("token")
        {token ? setUsername(getUsername(token)) : ''}   

        getUsers((data) => {
            const emailUser = data.filter((user) => username == user.username )
            .map((user) => user.email)
            setEmail(...emailUser)
        })

        
        const newData = {
            // Isi dengan data yang diinginkan
            username: username,
            email: email,
            
          };
      
          // Set datauser
          setDataUser(newData);

    },[username, email])

    return dataUser
}