import React from 'react'
import Layout from '../../layout/layoutadmin'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
const CategoryAdd = ({onAddCate}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onHandleSubmit = (data) => {
        const uploads= new FormData();
        uploads.append("name", data.name);
       
        onAddCate( uploads);
            console.log(uploads)
        history.push('/category/list');
    }
    return (
        <Layout >
             <div>
            <h2>Category Add</h2>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="category-name"
                        placeholder="Tên sản phẩm"
                        {...register('name', { required: true })}
                    />
                    <label htmlFor="product-name">Tên danh muc</label>
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </Layout >

    )
}

export default CategoryAdd