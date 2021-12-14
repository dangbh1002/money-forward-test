// Author: Bui Hai Dang

import Axios, { AxiosError } from 'axios';


/**
 * Error Mapping
 */
interface ErrorMapping {
  [key: string]: string
}
const errorCode2Message: ErrorMapping = {
  "Auth.form.error.phone-number.service": "Service provider is busy.",
  "Auth.form.error.phone-number.verify": "The verification code is invalid",
  "Auth.form.error.email.format": "This email is wrong format.",
}


/**
 * Parse Error
 * @param error 
 * @returns 
 */
const parseError = (error: AxiosError) => {
  let status
  let message

  if (error.response) {
    const errorData = error.response.data
    if (errorData) {
      status = errorData.status
      const code = errorData.code
      message = errorCode2Message[code] || message
    } else {
      status = error.response.status
      message = error.response.statusText
    }
  } else if (error.request) {
    status = error.request.status
    message = "Request error."
  } else {
    status = 0
    message = "Unknown error."
  }

  return {
    status,
    message
  }
}


/**
 * Create Axios Instance
 */
const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT),
});

axios.interceptors.response.use(response => {
  return response
}, error => {
  const customError = parseError(error)
  return Promise.reject(customError);
});


export default axios;
