import axios from 'axios';

export default axios.create({
    baseURL:'https://5c4a-70-107-93-154.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning": "true"}
});