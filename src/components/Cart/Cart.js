import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
    const { cart, getTotal, isEmpty, clearCart } = useContext(CartContext);
    console.log(cart);
    return(
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                    {
                        !isEmpty() ?
                        cart.map((product) => <ItemCart key={ product.id } { ...product }/>) :
                        <>
                            <h1>Carrito vacío!</h1>
                            <NavLink to="/">
                                <button className="btn btn-danger card-add" >Volver al inicio</button>
                            </NavLink>
                        </>
                    }
                </div>
                <aside className="col-lg-4 col-md-4 col-sm-4">
                    {
                        !isEmpty() ? 
                        <>
                            <section className="mb-4">
                                <div className="d-grid gap-2 mb-3">
                                    <button type="submit" class="btn btn-secondary" onClick={ () => clearCart() }  >Vaciar carrito</button>
                                </div>
                            </section>
                            
                            <section className="card mb-4">
                                <div className="card-header">
                                    Resumen
                                </div>
                                <div className="card-body">
                                    <p className="text-left">TOTAL</p>
                                    <p className="text-right">$ { getTotal() }</p>
                                </div>
                            </section> 

                            <section className="card mb-4">
                                <div className="card-header">
                                    Datos de contacto
                                </div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label class="form-label" for="name">Nombre completo</label>
                                        <input name="name" placeholder="Nombre completo" type="name" className="form-control" value="" />
                                    </div>

                                    <div className="mb-3">
                                        <label class="form-label" for="telephone">Teléfono de contacto</label>
                                        <input name="telephone" placeholder="Teléfono de contacto" type="number" className="form-control" value="" />
                                    </div>

                                    <div className="mb-3">
                                        <label class="form-label" for="email">Email</label>
                                        <input name="email" placeholder="Email" type="mail" className="form-control" value="" />
                                    </div>

                                    <div className="mb-3">
                                        <label class="form-label" for="email2">Repita email</label>
                                        <input name="email2" placeholder="Email" type="mail" className="form-control" value="" />
                                    </div>
                                    
                                    <div className="d-grid gap-2 mb-3">
                                        <button type="submit" class="btn btn-danger">Realizar compra</button>
                                    </div>
                                </div>
                            </section>
                        </> : 
                        ""
                    }
                    
                </aside>
            </div>
        </div>
    );
};

export default Cart;