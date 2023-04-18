import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./Products.css";


const Products = () => {
    const{data,cart,setCart}= useContext(dataContext);

    const buyProduct = (product) =>{
console.log(product)
setCart([...cart,product])
    }
  return data.map((product)=>{
   return (
    <div className="card" key={product.id}>
        <img className="image" src={product.img} alt="" />
        <h3>{product.name}</h3>
        <h4>{product.price}$</h4>
        <button onClick={()=> buyProduct(product)}>buy</button>
    </div>
);
  });
  
};

export default Products
