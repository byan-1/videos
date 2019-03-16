import axios from 'axios';

const KEY = 'AIzaSyAuMqgmF3ppBvnHb4tXb25NYN06DR10y0E';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});