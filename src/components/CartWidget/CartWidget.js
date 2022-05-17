import { BsCartFill } from "react-icons/bs";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext);

    return (
        <div>
            <NavLink to="/cart">
                <div type="button" className="btn btn-light">
                    <BsCartFill />
                    {
                        <span
                            className="badge bg-danger ml-5"
                            style={{ display: "inline-block" }}
                        >
                            {getQuantity()}
                        </span>
                    }
                </div>
            </NavLink>
        </div>
    );
};

export default CartWidget;