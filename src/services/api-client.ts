import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ff5817f0b2384e7e987626dbcf5e644f'
    }
})