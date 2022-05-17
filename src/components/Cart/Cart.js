import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartForm from "../CartForm/CartForm";
import CartTotal from "../CartTotal/CartTotal";
import ItemCartContainer from "../ItemCartContainer/ItemCartContainer";

const Cart = () => {
    const { cart, isEmpty } = useContext(CartContext);
    console.log(cart);

    return (
        <div className="container mt-4 mb-4">
            <div className="row">
                <ItemCartContainer />
                <aside className="col-lg-4 col-md-4 col-sm-4">
                    {
                        !isEmpty() ? 
                        <>
                            <CartTotal />
                            <CartForm />
                        </> : 
                        null
                    }
                </aside>
            </div>
        </div>
    );
};

export default Cart;