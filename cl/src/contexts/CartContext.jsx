import React, { createContext, useEffect, useReducer } from "react";

import { cartReducer } from "../reducers/cartReducer"; // Updated import

export const CartContext = createContext();

const CartContextProvider = (props) => {
	const [items, dispatch] = useReducer(cartReducer, [], () => {
		const localData = localStorage.getItem("items");
		return localData ? JSON.parse(localData) : [];
	});
	useEffect(() => {
		localStorage.setItem("items", JSON.stringify(items));
	}, [items]);
	
	return (
		<CartContext.Provider value={{ items, dispatch }}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
