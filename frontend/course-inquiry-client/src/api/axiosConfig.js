import axios from 'axios';

export default axios.create({
    baseURL:'https://swift-better-verbally.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning": "true"}
});