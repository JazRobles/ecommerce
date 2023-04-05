import { useContext } from "react";
import { dataContext } from "../Context/DataContext";



const Products = () => {
    const{data}= useContext(dataContext);
  return data.map((product)=>{
   return (
    <div className="card">
        <img className="image" src={product.img} alt="" />
        <h3>{product.name}</h3>
        <h4>{product.price}$</h4>
        <button>buy</button>
    </div>
);
  });
  
};

export default Products
