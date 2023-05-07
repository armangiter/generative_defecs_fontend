import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"

const BASE_URL = 'http://128.65.167.198:81/api/'

const api = axios.create({
  baseURL: BASE_URL,
})

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 403) {
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
        Object.values(JSON.parse(error.request.response)).map((item, idx) => {
          toast.error(`${Object.keys(JSON.parse(error.request.response))[idx]}: ${item}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
      }
    }
  }
)

export default api;