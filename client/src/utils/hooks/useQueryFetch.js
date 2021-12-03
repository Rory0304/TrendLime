import axios from 'axios';

export const useQueryFetch = async ({ queryKey }) => {
    const [key, params = {}] = queryKey;
    const { data } = await axios.get(key, {
        params: params,
    });
    return data;
};
