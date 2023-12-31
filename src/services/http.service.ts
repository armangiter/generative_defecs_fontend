import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"

const BASE_URL = import.meta.env.VITE_BASE_URL

const api = axios.create({
  baseURL: BASE_URL,
})

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 403) {
      window.location.reload()
    } else {
      try {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } catch (err) {
        toast.error(error.name, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  }
)

export default api;