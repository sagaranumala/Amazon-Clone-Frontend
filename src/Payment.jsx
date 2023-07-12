import React from 'react'
import WestIcon from '@mui/icons-material/West';
import "./Payment.css";
import {useState} from "react";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket }, dispatch] = useStateValue();
   const [paymentType,setPaymentType]=useState("Phone-pay");
   let totalCartlValue=getBasketTotal(basket);
   const handleChange=(event)=>{
    setPaymentType(event.target.value);
   }
  const process=()=>{
    if(totalCartlValue){
     if(paymentType==="cash"){
      alert("Your Order placed  successfully");
     }else{
      alert("You recived payment link");
     }
  }else{
    alert("Your Cart is Empty");
  }
}
  return (
    <>
      <div className='main'>
         <WestIcon className='icon'/>
         <span className='head'>Payments</span>

         <div className='Upi-section'>
            <div className='phonepay'>
              <div>
                 <input className='phonepay-section' type="radio" value="Phone-pay" name="common" checked={paymentType==="Phone-pay"} onChange={handleChange}/> 
              </div>
              <div>
                 <img className='p-img' src="data:image/png;base64,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" alt="pay"></img>
              </div>
            </div>
           <br></br>
           <div className='paytm-section'>
             <div>
               <input className="paytm-radio" type="radio" value="Paytm" name="common" onChange={handleChange} checked={paymentType==="Paytm"}/> 
             </div>
             <div>
              <img className='paytm' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAB6CAMAAADKxjLHAAAAmVBMVEX///8fM2sAuvIAuPIAtfEAs/FYX4YWLmgMJ2X29/rX8PwTK2dbZYlXxfS15Pr8/P2f2/hszvbi9fwAAFkAFF7Ex9MAGWBzd5Y9S3r1/f95fZrm5+0AIWIAHWFryfUwv/MAAFOCiaMADlvF6fq3u8kqO3AACFp+z/bc3uWipbisrsCq4PlMWIGI1ffR092LkKiXmrBnb5EAAE0xI3FuAAAD5ElEQVR4nO2Z6XaiMBSAWQ0IFBVRUSjUXVw77/9wk5AQFkOndBn0nPv9arjk9EsMuTcgSQAAAAAAAAAAAAAAAAAAAAAAAAAAPA7BqGuDL7Fy4qBrhy8w0BV91bVEe/qqomjP5z2Klaf0HqrP6N13iPazea/OSqat6H1hfLTqFztksFr1v7DtHBKvzBZN1yYPLmbbMSPaTNML77TMrm3fXNIybY/e4xNnTdM1ak0mHLccbBXEOuUo9Ye6jq+qO6IeHGOd3BO/tFQ3e5ZcARnLk59H1+NKwJrSIZkz2glFC9L0Q3qHYUtsXVdQ8WLp6+zv4VllN2jKURo5+RA1p12OMntIroO8de4dVSPG9kK9WaeQerOhW2JvhXhr+SBKYX2oFC21YU218MZTuxd7y0hefM+7+ktUWnGbGRd6y9aswVsO7R/0ro3i9dveMl24Am8ZLX7LW9FbTHiDt3Fo8g7TX/NWz9/3vlJvz2DwXSe8tfVWXz7yLj+oLRZK4b3BoFzPeMui7uGNMZdLEe49ufdexRhuQhpkhyu8VefVKanGu13RdNz23qG/x5xYy5jXb7zmm/Tc/dBbGmHO+a48wA2SUbi3hhNMcOSjIHvIyOHen08+3JspLJu8/fEnvQmD3PuFXci9VYe0glcWp/U5H9RveM+NH/EekpabPwQ014x+3tu93GYoCsNwachP5L23o8iqbjjP4L1OakVX3Xv8kN55ndfsHV5N01y8d+lN90HbKrzNUJSSiLd74vt8kiRe3ujEu5Z3sHe6FGhT73dDFOrGu2qH83xDBHtLh/u65UG8D8UixseaaMKXeuZ9EXZ6AO9oj8+WLIJOhzS9bXgFQIqIuWjCu/cm5wbubWWHn7SU53EQCVZ4997knFbMd3YYvnhlb2k/u5/xrr1RQs7FxXwvBN7SYprgVJrxEN4oXJ6yQ/vH801uuE1tQq/b/XuyJUSzuU9fkhTz3eBNemfcjA69J2Yt8o91UuLS5XzT+kTkjWqVC/M2cxbT7usqkbfVW/v+eiNXvN3Zn4Th8dL8/RG8i3xpjcfjCap67/NxlAivj+At2ffF98feHn9f+w9vafeb3odJO28k80e7U2/XEqbSRu8o5V079RYX4I3e4anYILv1ltLJ/RKP6JvDO+/ILnX8D94ngxYZnsBb8jdJaFXYzugi3iNWnGRYk+RazlsDre7NvjdozFureOcfI1q8Z5PWp17GVRze36YV+Bq+sn4Ee5pW/2M/ZuRvhoPBK4V+VFg5FDoK6cyCrb6+sazXpku5n7jziFL+3V1C3ggo4iAAAAAAAAAAAAAAAAAAAAAAAAAAAJ/mL7EEeQtf/EyuAAAAAElFTkSuQmCC' alt="paytm"></img>
            </div>
           </div>
       </div>
      <div className='card-cash'>
        <div className='card-t'>
          <input className="card-rupee" type="radio" value="card" name="common" onChange={handleChange} checked={paymentType==="card"}/> 
          <span className='card'>Credit/Debit Card</span>
        </div>
        <div className='cash-on'>
          <input className="cashOnDelivary" type="radio" value="cash" name="common" onChange={handleChange} checked={paymentType==="cash"}/> 
          <span className='cash-ond'>Cash  on Delivary</span>
        </div>
      </div>
        <br></br>
       {paymentType==="card" &&
       <div>
        <div className='card-section'>
          <div>
            <input className="card-r" type="radio" value="Rupee" name="card"/> Rupee 
          </div>
          <div>
            <input className="card-v" type="radio" value="Visa" name="card"/> Visa 
          </div>
          <div>
            <input className="card-m" type="radio" value="Master" name="card"/> Master
          </div>
       </div>
      <div className='card-number'>
       <label for="ccn" >Card Number :  </label>
         <input id="ccn" type="tel" inputMode='numeric' pattern='[0-9\s]{16,19}' maxLength="16" placeholder='xxxx xxxx xxxx xxxx'/>
       </div>
      <div className='cvv-number'>
        <label for="cvv" >CVV :  </label>
        <input id="cvv" type="tel" placeholder="CVV" inputMode='numeric' minLength="3" maxLength="3"></input>
      </div>
      <div className='expiry-date'>
        <label for="cvv" >Card Expiry:  </label>
        <input type="text" id="inputExpDate" placeholder="MM / YY" maxlength='7'></input>
       </div>
       <br></br>
       <div className='pay'>
        <label htmlFor="total">Total Ammount : </label>
        <span className='tpay'>{totalCartlValue}</span>
       </div>
       <button className='btn-paycard' onClick={process}>Proceed to Pay</button>
       </div>}

       {paymentType==="Paytm" &&
       <div className='upi-id'>
        <label for="upi" >Enter Upi-id/Number :  </label>
        <input type="text" id="upi" placeholder='Mobile No/Upi id' />
        <br></br>
        <div className='payp'>
        <label htmlFor="total">Total Ammount : </label>
        <span className='tpay'>{totalCartlValue}</span>
       </div>
        <button className='btn-pay' onClick={process}>Proceed to Pay</button>
        </div>
       }
       {paymentType==="Phone-pay" &&
       <div className='upi-id'>
        <label for="upi" >Enter Upi-id/Number :  </label>
        <input type="text" id="upi" placeholder='Mobile No/Upi id' />
        <br></br>
        <div className='payPh'>
        <label htmlFor="total">Total Ammount : </label>
        <span className='tpay'>{totalCartlValue}</span>
       </div>
        <button className='btn-pay' onClick={process}>Proceed to Pay</button>
        </div>
       }
       {
        paymentType==="cash" &&
        <div>
          <div className='pay'>
        <label htmlFor="total">Total Ammount : </label>
        <span className='tpay'>{totalCartlValue}</span>
       </div>
          <button className='btn-cashOnDeivary' onClick={process}>Place Order</button>
        </div>
       }
      </div>
    </>
  )
}

export default Payment;
