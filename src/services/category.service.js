import axios from "axios";

export const getCategory = (callback) => {
  axios
    .get("https://fakestoreapi.com/products/categories")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      callback(err);
    });
};
