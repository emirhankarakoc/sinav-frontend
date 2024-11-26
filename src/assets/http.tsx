import axios from "axios";

const LOCALHOST = "https://emirhan-sinavzinyo-backend.3kktrr.easypanel.host/";
export const APIURL = LOCALHOST;

const token = localStorage.getItem("jwtToken");

export const http = axios.create({
  baseURL: APIURL,
  data: {},
  headers: token ? { Authorization: "Bearer " + token } : {},
});

export const httpError = (error: any) => {
  let errorMessage = error.message;

  if (error.response) {
    errorMessage = error.response.data;
  }
  return errorMessage;
};
