import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '13f91f227emsh78f8afdf4be1eabp1c999fjsn9d9b7c3833aa'
        }
    })
    return data;
}