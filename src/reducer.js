export function reducer(state, { type, payload }) {
    switch (type) {
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: '',
            };
        
        
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false
            }
        case 'ADD_TO_BASKET': {
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.mainId === payload.mainId
            );
            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newOrder = [...state.order, newItem]
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }
            
            return {
                ...state,
                order: newOrder,
                alertName: payload.displayName
            }
        }
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter((el) => el.mainId !== payload.id),
            }
        case 'CLEAR_BASKET':
            return {
                ...state,
                order: []
            }
        case 'INCREMENT':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.mainId === payload.id) {
                        const newQuantity = el.quantity + 1;
                        return {
                            ...el,
                            quantity: newQuantity,
                        };
                    } else {
                        return el;
                    }
                })
            }
        case 'DECREMENT':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.mainId === payload.id) {
                        const newQuantity = el.quantity - 1;
                        return {
                        ...el,
                        quantity: newQuantity >= 0 ? newQuantity : 0,
                        };
                    } else {
                        return el;
                    }
                    })
            }
        case 'SHOW_BASKET':
            return {
                ...state,
                showBasket: !state.showBasket
            }
        
        default:
            return state;
    }
}