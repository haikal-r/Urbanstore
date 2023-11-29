import axios from "axios";

export const login = (data, callback) => {
    axios.post("https://fakestoreapi.com/auth/login", data).then((res) => {
        callback(true, res.token)
    })
    .catch((err) => {
        callback(false, err)
    })
}