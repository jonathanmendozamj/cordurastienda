import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
    const { cart, getTotal, isEmpty } = useContext(CartContext);
    console.log(cart);
    return(
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-lg-9 col-md-9 col-sm-8">
                    {
                        !isEmpty() ?
                        cart.map((product, index) => <ItemCart key={ index } { ...product }/>) :
                        <>
                            <h1>Carrito vacío!</h1>
                            <NavLink to="/">
                                <button className="btn btn-danger card-add" >Volver al inicio</button>
                            </NavLink>
                        </>
                    }
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4">
                    {
                        !isEmpty() ? 
                        <div className="card">
                            <div className="card-header">
                                Resumen
                            </div>
                            <div className="card-body">
                                <p className="text-left">TOTAL</p>
                                <p className="text-right">$ { getTotal() }</p>
                            </div>
                        </div> : 
                        ""
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;