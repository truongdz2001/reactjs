//import axios from 'axios';
import { axiosClient } from './axiosClient';

const ProductAPI = {
    getAll(){
        const url = `/api/product`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/api/product/${id}`;
        return axiosClient.get(url);
    },
    add(products){
        const url = `/api/product`;
        return axiosClient.post(url , products);
    },
    remove(id){
        const url = `/api/product/${id}`;
        return axiosClient.delete(url);
    },
    update(id,data){
        const url = `/api/product/${id}`;
        return axiosClient.put(url,data);
    }
}
export default ProductAPI;