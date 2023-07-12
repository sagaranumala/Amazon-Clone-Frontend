import React from "react";
import "./Product.css";
import { useStateValue} from "./StateProvider";
//cartLocal=JSON.parse(localStorage.getItem("cart"));
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  //const [cart,setCart]=useState(cartLocal);
  const checkBasket=
  basket.find((item)=>{
       return item.id===id;
    })

  const addToBasket = () => {
    // dispatch the item into the data layer
    if(checkBasket){
      console.log(checkBasket);
      alert('Item aready in cart');
    }else{
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  }
  }
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <p className="title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p  className="star">★</p>
            ))}
        </div>
      </div>
      <div className="btn">
      <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
