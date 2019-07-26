/* eslint-disable */
import axios from 'axios';

// CORS enabled apikey
const apikey = 'e44fd966d0822fdbe291c7ca36880acc114b3';

// REST endpoint
let restdb = axios.create({
  baseURL: 'https://project02-9eca.restdb.io',
  timeout: 2000,
  headers: { 'x-apikey': apikey }
});

export { apikey, restdb };
