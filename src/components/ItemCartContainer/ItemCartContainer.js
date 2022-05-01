import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

const ItemCartContainer = () => {
    const { cart, isEmpty } = useContext(CartContext);

    return (
        <div className="col-lg-8 col-md-8 col-sm-8">
        {
            !isEmpty() ?
            (cart.map(product => <ItemCart key={ product.id } { ...product } />)) :
            <>
                <h1>Carrito vacío!</h1>
                <NavLink to="/">
                    <button className="btn btn-danger card-add">Volver al inicio</button>
                </NavLink>
            </>
        }
        </div>
    );
};

export default ItemCartContainer;