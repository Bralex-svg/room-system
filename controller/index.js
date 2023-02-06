import Axios from "axios";

export default function Controller(url, method) {
  return new Promise((resolve, reject) => {
    try {
      Axios({
        baseURL: url,
        method: method ? method : "get",
      })
        .then((response) => resolve(response.data))
        .catch((error) =>
          reject(error?.response?.data || error?.message || error)
        );
    } catch (error) {
      reject(error);
    }
  });
}
