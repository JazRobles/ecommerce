import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import React from 'react'


const CartElements = () => {
    const {cart}= useContext(dataContext);
  return cart.map((Product)=>{
    return(
        <div className="cartContent" key={Product.id}>
            <img src={Product.img} alt=""/>
            <h3 className="name">{Product.name}</h3>
            <h4 className="price">{Product.price}$</h4>
        </div>
    )

  })
   
  
};

export default CartElements
