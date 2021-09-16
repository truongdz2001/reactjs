//import axios from 'axios';
import { axiosClient } from './axiosClient';

const CategoryAPI = {
    getAll(){
        const url = `/api/category`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/api/category/${id}`;
        return axiosClient.get(url);
    },
    add(cate){
        const url = `/api/category`;
        return axiosClient.post(url , cate);
    },
    remove(id){
        const url = `/api/category/${id}`;
        return axiosClient.delete(url);
    },
    update(id,data){
        const url = `/api/category/${id}`;
        return axiosClient.put(url,data);
    }
}
export default CategoryAPI;