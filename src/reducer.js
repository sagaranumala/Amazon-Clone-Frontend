export const initialState = {
  basket: [],
  user: null,
};

// Selecto
//const {cartValue}=cartValue;
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: []
      }

    case "REMOVE_FROM_BASKET":
      //let jsonObject = state.basket.map(JSON.stringify);
      //let uniqueSet = new Set(jsonObject);
      //let uniqueArray = Array.from(uniqueSet).map(JSON.parse);
      const index = state.basket.filter((basketItem)=>{
        return basketItem.id != action.id;
      }
      );
      let newBasket = [...index];

     /* if (index >= 0) {
        newBasket.splice(index, 1);

      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        )
      }
      */
      return {
        ...state,
        basket: newBasket
      }
      case "REDUCE_BASKET":
        const ind = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        let newBasket1 = [...state.basket];
  
        if (ind >= 0) {
          newBasket1.splice(ind, 1);
  
        } else {
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in basket!`
          )
        }
  
        return {
          ...state,
          basket: newBasket1
        }
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
    
    case "SET_CART":
      return {
        ...state,
        cartValue: action.price,
      }

    default:
      return state;
  }
};

export default reducer;
