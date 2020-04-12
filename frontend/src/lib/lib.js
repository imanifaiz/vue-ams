import axios from "axios";
import Spinner from "../components/Spinner";
import Alert from "../components/Alert";

const _axios = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
  // headers: { "Content-Type": "application/x-www-form-urlencoded" }
  //   post: {
  //     "Content-Type": "application/x-www-form-urlencoded" 
  //   },
  //   put: {
  //     "Content-Type": "application/x-www-form-urlencoded" 
  //   }
  // }
});

_axios.interceptors.response.use(response => {
  Spinner.hide();

  return response;
}, (err) => {
  Spinner.hide();

  if (err.response.status === 500 || err.response.status === 404 || err.response.status === 422) {
    Alert.error(`ERROR ${err.response.status}: ${err.response.statusText}`)
  }

  return Promise.reject(err);
});

const getURL = (to) => {
  let urls = {
    "create" : `${to.meta.resource}/create`,
    "edit" : `${to.meta.resource}/${to.params.id}/edit`,
  }

  return (urls[to.meta.mode] || urls["create"]);
}

export {
  _axios,
  getURL
}