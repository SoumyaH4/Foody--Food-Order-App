import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem : (state,action)=>{
        //  state.items.push(action.payload);
            const existingItem = state.items.find(
              (item) => item?.card?.info?.id === action.payload?.card?.info?.id
            );
      
            if (existingItem) {
              // If the item already exists in the cart, increase its quantity
              existingItem.quantity += 1;
            } else {
              // If the item is new, add it to the cart with a quantity of 1
              state.items.push({ ...action.payload, quantity: 1 });
            }
        },

        removeItem : (state,action)=>{
            // state.items = state.items.filter((item) => item?.card?.info?.id !==  action.payload); 
            const existingItem = state.items.find(
                (item) => item?.card?.info?.id === action.payload
              );
        
              if (existingItem) {
                if (existingItem.quantity > 1) {
                  // If the item quantity is more than 1, reduce it by 1
                  existingItem.quantity -= 1;
                } else {
                  // If the quantity is 1, remove the item from the cart
                  state.items = state.items.filter(
                    (item) => item?.card?.info?.id !== action.payload
                  );
                }
              }
        },

        clearCart : (state,action) =>{
            // state.items.length = 0;  
            // both are same. Either extixting state is mutating or use retun a new state
        // return { items: [] };
        state.items = state.items.filter(
            (item) => item?.card?.info?.id !== action.payload
          );
        }
    }

});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;