import axios from 'axios';

export default axios.create({
    baseURL:'hhttps://bb6a-2601-602-8100-c8e0-ccbe-acd1-6337-feb9.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});