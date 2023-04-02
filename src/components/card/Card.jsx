import React from 'react';
import './card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Card = (props) => {
    const {name,seller,
        ratings,price,img  } =props.p;
    const CardHandler =props.CardHandler;
    return (
        <div className='single-card'>
            <img src={img} className='card-img' alt="" />
             <h4 className='product-heading'>{name}</h4>
             <p className='procucts-price'>Price: ${price}</p>
            <div className='products-info'>
                <p>Manufacturer: {seller}</p>
                <p className='product-rating'>Rating:{ratings}</p>
            </div>
            <button className='card-add-btn' onClick={()=>CardHandler(props.p)}>
                Add to Card
                <FontAwesomeIcon className='card-icon' icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Card;