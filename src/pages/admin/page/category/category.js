import React,  { useEffect, useState } from 'react'
import Layout from '../../layout/layoutadmin'
import { Link } from 'react-router-dom';
import CategoryAPI from '../../../../api/categoryAPI';
const CategoryList = (props) => {
    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
      // didMount
      const fetchData = async () => {
        try {
          setLoading(true)
          const { data: category } = await CategoryAPI.getAll()
          setCategory(category)
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }
      }
      fetchData()
    }, [])
    console.log(category)
    return (
        <Layout >
            <div className="col-8">
                <div>
                    <div className="d-flex justify-content-between items-center">
                        <h1>Category</h1>
                        <div>
                            <Link to="/category/add" className="btn btn-danger">Add</Link>
                        </div>
                    </div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {category.map((category, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{category.name}</td>
                                    <td>
                                        <Link to={`/admin/category/${category._id}`} className="btn btn-primary">Edit</Link>
                                        <button className="btn btn-danger" onClick={() => {props.onDeleteCate(category._id)} }>Xóa</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export default CategoryList
