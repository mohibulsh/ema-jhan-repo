import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import Summary from '../summary/Summary';
import './Products.css'
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Products = () => {
    const [products,setproducts]=useState([])
    const [order,setorder]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then (res=> res.json())
        .then (data =>setproducts(data))
    },[])
    useEffect(()=>{
        const saveStoreCart = getShoppingCart();
        const setCard = [];
        for (const id in saveStoreCart){
         const addTheCart = products.find(p =>p.id==id) 
         //ja hatu useEffect ta akhana dependence hichaba acha 
         // tai first call a emty array paba tai emty arrar moda find korla
         // products undefine hoba tai 2nd time a products ta ka paba tai
         // if condition na dila type error dekhaba
         if(addTheCart){
            const quantity = saveStoreCart[id];
            addTheCart.quantity=quantity;
            setCard.push(addTheCart);
         }
         
        }
        setorder(setCard)
    },[products])
    const CardHandler =(product)=>{
        const addNewOrder =[...order,product];
            setorder(addNewOrder)
            addToDb(product.id)

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