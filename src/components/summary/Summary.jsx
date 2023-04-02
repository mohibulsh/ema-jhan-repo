import React from 'react';
import './summary.css'
const Summary = (props) => {
     const order = props.product;
    let total = 0;
    let shipping =0;
    let tax =0;
    let grandTotal = 0;
    {
                
        order.map(o=>{
            let value=o.price
            total=total+value;
            shipping =shipping+o.shipping;
            tax =  total*5/100;
            grandTotal = total+shipping+tax;
            return total
            ,shipping,tax
            ,grandTotal;
        })
      }
    return (
        <div className='orderSummary'>
             <h4>order summary </h4>
             <p>selected iteam:{order.length}</p>
              <p>Total price:${total}</p>
              <p>Total Shipping Charge:${shipping}</p>
              <p>Total tax: ${tax.toFixed(2)}</p>
              <p>Grand total:<span className='grandTotal'>
                ${grandTotal.toFixed(2)}</span></p>
        </div>
    );
};

export default Summary;