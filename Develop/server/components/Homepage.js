import React from "react";
import { useCartContext } from "../utils/GlobalState";

function Homepage() {
    const [_, dispatch] = useCartContext();
}

function handleSubmit(e) {
    e.preventDefault();

    dispatch({
        type: "add",
        title: 
    });

    return (
        <div>
            <h1>Top Sellers</h1>
            <form className="form-group mt-5" onSubmit={handleSubmit}>>
        <button className="btn btn-success mt-3 mb-5" type="submit">
                    Add to Cart
</button>
            </form>
        </div>
    );
}

export default Homepage;