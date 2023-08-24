import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    showBasket: false,
    alertName: "",
};

export const ContextProvider = ({ children }) => {

    const [value, dispatch] = useReducer(reducer, initialState)


    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }


    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: item})
    }

    value.removeFromBasket = (itemId) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}})
    }

    value.clearBasket = () => {
        dispatch({ type: 'CLEAR_BASKET'})
    }

    value.increment = (itemId) => {
        dispatch({type: 'INCREMENT', payload: {id: itemId}})
    }

    value.decrement = (itemId) => {
        dispatch({type: 'DECREMENT', payload: {id: itemId}})
    }

    value.handleShowBasket = () => {
        dispatch({ type: 'SHOW_BASKET'})
    }

    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    }
    
    return <ShopContext.Provider value={ value}>
        {children}
    </ShopContext.Provider>
}