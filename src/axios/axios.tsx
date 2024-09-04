import axios from 'axios'


const baseUrl: string = 'http://localhost:4321/api/'

export const customAxios = axios.create({
    baseURL: baseUrl
});
