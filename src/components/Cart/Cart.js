import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartEmpty from "../CartEmpty/CartEmpty";
import CartForm from "../CartForm/CartForm";
import CartTotal from "../CartTotal/CartTotal";
import ItemCartContainer from "../ItemCartContainer/ItemCartContainer";

const Cart = () => {
    const { isEmpty } = useContext(CartContext);

    return (
        <div className="container mt-4 mb-4">
            <div className="row">
                <ItemCartContainer />
                <aside className="col-lg-4 col-md-4 col-sm-4">
                    {
                        !isEmpty() ? 
                        <>
                            <CartEmpty />
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