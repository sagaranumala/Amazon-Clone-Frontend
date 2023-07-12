import React,{useState} from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";


function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket, user }, dispatch] = useStateValue();
    const [qunantity,setQunantity]=useState(1);
    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    const upDatepricedec=()=>{
        if(qunantity>1){
            setQunantity(qunantity-1)
            dispatch({
                type: 'REDUCE_BASKET',
                id: id,
            })
        }
    }
    const upDatepriceinc=()=>{
            setQunantity(qunantity+1)
            dispatch({
                type:"SET_CART",
                price: price
            })
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
    
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price*qunantity}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                <div>
                    <button className='dec' onClick={upDatepricedec}><strong>-</strong></button>
                    {qunantity}
                    <button className='inc' onClick={upDatepriceinc}><strong>+</strong></button>
                    </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
