import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-redux-saga.firebaseio.com/'
});

export default instance;