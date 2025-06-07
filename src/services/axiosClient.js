import axios from "axios";
// import { store } from "../store/store";

const BASE_URL = "http://localhost:3100";
const rawAxios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const axiosClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// gắn accessToken vào mọi request
// axiosClient.interceptors.request.use((config) => {
//   const state = store.getState();
//   const accessToken = state.auth.accessToken;
//   if (accessToken) {
//     config.headers = {
//       ...config.headers,
//       Authorization: `Bearer ${accessToken}`,
//     };
//   }
//   //nếu có config.pathParams thì thay thế URL
//   if (config.pathParams) {
//     Object.entries(config.pathParams).forEach(([key, value]) => {
//       config.url = config.url.replace(`${key}`, value);
//     });
//   }
//   return config;
// });
// tự động refresh token khi lỗi 401
// axiosClient.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response?.status === 401 &&
//       !originalRequest._retry &&
//       !originalRequest.url.includes("/auth/refresh")
//     ) {
//       originalRequest._retry = true;
//       try {
//         // Dùng raw axios không có interceptor để gọi refresh
//         const res = await rawAxios.post("/auth.refresh");
//         const { accessToken, user } = res.data;

//         store.dispatch(setCredentials({ user, accessToken }));
//         originalRequest.headers = {
//           ...originalRequest.headers,
//           Authorization: `Bearer ${accessToken}`,
//         };
//         return axiosClient(originalRequest);
//       } catch (refreshError) {
//         store.dispatch(logout());
//         return Promise.reject(refreshError);
//       }
//     }
//   }
// );

export default axiosClient;
