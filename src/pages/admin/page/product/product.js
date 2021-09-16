import Layout from '../../layout/layoutadmin'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import ProductAPI from '../../../../api/productAPI';


const ProductList = (props) => {
    console.log(props)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // didMount
        const fetchData = async () => {
            try {
                setLoading(true)
                const { data: products } = await ProductAPI.getAll()
                setProducts(products)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    // console.log(products)
    return (
        <Layout >
            <div>
                <div className="d-flex justify-content-between items-center">
                    <h2>Product </h2>
                    <div>
                        <Link to="/product/add" className="btn btn-danger">Add</Link>
                    </div>
                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (

                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                {<td><img src={`http://localhost:4000/api//product/photo/${product._id}`} width="100px" /></td>}
                                <br></br>
                                <td>
                                    <Link to={`/product/edit/${product._id}`} className="btn btn-primary">Edit</Link>
                                    <button className="btn btn-danger" onClick={() => {props.onDelete(product._id)} }>Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout >

    )
}

export default ProductList
