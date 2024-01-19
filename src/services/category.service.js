import axios from "axios";

export const getCategory = (item, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/category/${item}`)
    .then((res) => {
      callback(res.data)
    })
    .catch((err) => {
      callback(err);
    });
};
