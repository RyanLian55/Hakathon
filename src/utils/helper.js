/* eslint-disable */
import axios from 'axios';

// CORS enabled apikey
const apikey_survey = '5d3b1a3df3a8501f7b40dcfb';

// REST endpoint
let restdb = axios.create({
  baseURL: 'https://project02-9eca.restdb.io',
  timeout: 2000,
  headers: { 'x-apikey': apikey_survey }
});

export { apikey_survey, restdb };
