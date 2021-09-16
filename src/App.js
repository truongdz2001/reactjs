import React, { useState, useEffect } from 'react';

import Routes from "./Routes";

import 'bootstrap/dist/css/bootstrap.min.css';
import ProductAPI from './api/productAPI';
import CategoryAPI from './api/categoryAPI';


function App() {
 
      const [product, setProduct] = useState([]); //1

  useEffect(() => { //3
    const getTodos = async () => {
      try {
        // nêú thành công
        const { data: product } = await ProductAPI.getAll();
        //console.log(products);
        setProduct(product);

      } catch (error) {
        // nếu thất bại 
        console.log(error)
      }
    }
    getTodos();
  }, [])
  const onHandleAdd = async (product) => {

    try {
      const { data } = await ProductAPI.add(product);
      setProduct([
        ...product,
        data
      ]);
    } catch (error) {
      console.log(error)
    }

  }
  const onHandleDelete = async (id) => {
    try {
      await ProductAPI.remove(id)
      const newProduct = product.filter(product => product._id !== id);
      setProduct(newProduct);
    } catch (error) {
      console.log(error);
    }

    //console.log(newProducts);
  }
  //
  const [category, setCategory] = useState([]);
  useEffect(() => {
    // call api
    const getCategory = async () => {
      try {
        const { data: category } = await CategoryAPI.getAll();//sai nay
        console.log(category);
        // console.log(dataTodos);
        setCategory(category)
      } catch (error) {
        console.log(error)
      }
    }
    getCategory();
  }, [])


  const onHandleAddCategory = async (category) => {
    try {
      const { data } = await CategoryAPI.add(category);
      setCategory([
        ...category,
        data
      ]);
    } catch (error) {
      console.log(error)
    }

  }

  const onHandleDeleteCate = async (id) => {
    try {
      const { data:  deletedCategory } = await CategoryAPI.remove(id);
      const newCategory = category.filter(category => category._id !== deletedCategory._id);
      setCategory(newCategory);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="">
      {/* <todosForm onAdd={onHandleAdd}/>
    <TodoList data={todos} onDelete={onHandleDelete} /> */}
      <Routes product={product} onDelete={onHandleDelete} onAdd={onHandleAdd} 
      category={category} onAddCate={onHandleAddCategory}  onDeleteCate={onHandleDeleteCate} />

    </div>



  );
}

export default App;
