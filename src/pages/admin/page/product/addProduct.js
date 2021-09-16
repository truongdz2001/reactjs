import React from 'react'
import Layout from '../../layout/layoutadmin'
import { useForm } from 'react-hook-form'
import {  useHistory } from 'react-router-dom'

    const ProductAdd = ({ onAdd}) => {
        const { register, handleSubmit, formState: { errors } } = useForm();
        const history = useHistory();
        const onHandleSubmit = (data) => {
            console.log(data)
            const uploads = new FormData();
            uploads.append("name", data.name);
            uploads.append("price", data.price);
            uploads.append("photo", data.photo[0]);
            uploads.append("description", data.description);
            onAdd(uploads);
           console.log(uploads)
           history.push('/product/add');
        }
    return (
        <Layout >
             <div>
            <h2>Product Add</h2>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="product-name"
                        placeholder="Tên sản phẩm"
                        {...register('name', { required: true })}
                    />
                    <label htmlFor="product-name">Tên sản phẩm</label>
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}
                </div>
                <div className="form-floating mb-3">
                    <input type="number"
                        className="form-control"
                        id="product-price"
                        placeholder="Giá sản phẩm"
                        {...register('price', { required: true })}
                    />
                    <label htmlFor="product-price">Giá sản phẩm</label>
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}
                </div>
                <div className="form-floating mb-3">
                    <input type="file"
                        className="form-control"
                        id="product-image"
                        placeholder="Anh san pham"
                        {...register('photo', { required: true })}
                    />
                    <label htmlFor="product-image">Ảnh sản phẩm</label>
                    <br></br>
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}
                </div>
                
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </Layout >

    )
}

export default ProductAdd