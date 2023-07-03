import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"
import Cookies from "universal-cookie";

const BASE_URL = import.meta.env.VITE_BASE_URL

const cookies: Cookies = new Cookies()

const api = axios.create({
  baseURL: BASE_URL,
})

api.interceptors.request.use(
  (request) => {
    if (cookies.get("access")) {
      request.headers.authorization = `Bearer ${cookies.get("access")}`;
    }
    return request;
  },
  (err) => Promise.reject(err),
);

api.interceptors.response.use(
  response => response,
  error => {
    console.log(error)
    if (
      error.response.data &&
      error.response.data.detail &&
      (error.response.data.detail ===
        "Given token not valid for any token type" ||
        error.response.data.detail === "User not found")
    ) {
      cookies.remove("access", { path: "/" });
      cookies.remove("refresh", { path: "/" });
      window.location.reload();
    } else {
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
  }
)

export default api;