import axios from "axios";
import { Toast } from "../services/Notification";
const api = axios.create({
  baseURL: "http://localhost:8080/api/"
})

const onSuccess = (response) => response
const onError  = (error) => {
  if(error?.response?.data?.message){
    Toast.fire({
    icon: "error",
    title: error.response.data.message,
  });
  }
  console.log({error})
  return Promise.reject(error)
}
api.interceptors.response.use(onSuccess, onError)
export {api}