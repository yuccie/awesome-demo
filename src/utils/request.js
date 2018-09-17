import axios from 'axios';

// create an axios instance
const request = axios.create({
  timeout: 5000 // request timeout
});

// respone interceptor
request.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code === '00000') {
      return Promise.resolve(res.data);
    } else {
      return Promise.reject(res.msg);
    }    
  },
  error => {
    return Promise.reject(error);
  }
);

export default request;