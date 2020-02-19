import React from "react";
import { useCartContext } from "../utils/GlobalState";

function Cart() {
    const [state, dispatch] = useCartContext();

    return (
        <div>
            <h4>My Cart:</h4>
            <ul className="list-group">
                {state.map((product, index) => (
                    <li className="list-group-item col-12" key={product.id}>
                        <button
                            className="btn btn-danger mr-4"
                            onClick={() => dispatch({ type: "remove", index })}
                        >
                            X Remove
            </button>
                        {index}:<span className={product.priority ? "font-weight-bold" : ""}> {product.title}</span>
                    </li>
                ))}
            </ul>


        </div>

    );
}

export default Cart;