import axios from 'axios';
export default axios.create({
    baseURL: 'https://anthill-c45d7-default-rtdb.firebaseio.com/'
});