import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [{ basket, user}, dispatch] = useStateValue();
  const navigate=useNavigate();
  const makeBasketEmpty=()=>{
    dispatch({
      type:'EMPTY_BASKET',
      basket: []
    })
  }
  console.log(user)
  const proceed=()=>{
    if(basket.length==0){
      alert("Your basket is empty");
    }
    if(!user){
     // console.log(user)
       alert("Please sign in");
       navigate("/login")
    }else{
      //console.log(user)
      navigate("/cardValidation");
    }
  }
  let value=getBasketTotal(basket);
  let jsonObject = basket.map(JSON.stringify);
              
  console.log(jsonObject);
    
  let uniqueSet = new Set(jsonObject);
  let uniqueArray = Array.from(uniqueSet).map(JSON.parse);
  
  return (
    <div className="checkout">
      <div className="checkout__title">
          <h3>Hello, {user}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {uniqueArray.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>

      <div className="checkout__right">
        <div>
           <p>
              Total({basket.length} items): <strong>${value}</strong>
            </p>
        </div>
        <div className="sub">
          <div>
           <button className="removeItemAll" onClick={makeBasketEmpty}>Clear basket</button>
           </div>
           <div>
          <button className="checkoutp" onClick={proceed}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
