import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext({
    title: "",
    seller: "",
    description: "",
    short_description: "",
    thumbnail_url: "",
    flash_day: "",
    post_date: {}
});

const { Provider } = CartContext;

function reducer(state, action) {
    switch (action, type) {
        case "add":
            return [
                ...state,
                {
                    id: state.length * Math.random(),
                    title: product.title
                }
            ];
        case "remove":
            return state.filter((_, title) => {
                return title !== product.title;
            }
            );
    }
}

function CartProvider({ value = [], ...props }) {
    const [state, dispatch] = useReducer(reducer, []);

    return <Provider value={[state, dispatch]} {...props} />

}

function useCartContext() {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };