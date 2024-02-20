import axios from 'axios';

export default axios.create({
    baseURL:'https://c0f9-174-198-16-22.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning": "true"}
});