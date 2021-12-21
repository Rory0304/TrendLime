import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_DB_HOST,
});

const queryFetch = async ({ queryKey }) => {
    const [key, params = {}] = queryKey;
    const { data } = await apiClient.get(key, {
        params: params,
    });
    return data;
};

export default queryFetch;
