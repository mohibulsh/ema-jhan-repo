import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import Summary from '../summary/Summary';
import './Products.css'
const Products = () => {
    const [products,setproducts]=useState([])
    const [order,setorder]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then (res=> res.json())
        .then (data =>setproducts(data))
    },[])
    const CardHandler =(product)=>{
        const addNewOrder =[...order,product];
            setorder(addNewOrder)
    }
    
    return (
        <div className='shop-container'>
            <div className="shop-card">
              {
                products.map(p=><Card 
                    p={p}
                    key={p.id}
                    CardHandler={CardHandler}
                ></Card>)
              }
            </div>
            <div className="order-summery">
            <Summary product={order}></Summary>
            </div>
        </div>
    );
};

export default Products;