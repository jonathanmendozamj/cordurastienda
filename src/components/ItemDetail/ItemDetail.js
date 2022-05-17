import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/CartContext";
import ItemCount from "./../ItemCount/ItemCount";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ItemDetail = ({ id, img, name, description, price, stock }) => {
    const { addItem, isInCart } = useContext(CartContext);

    const newAlert = withReactContent(Swal);

    const handleAdd = (count) => {
        const productObj = {
            id,
            name,
            price,
            img,
            quantity: count
        };

        addItem(productObj);

        newAlert.fire({
            text: `Producto agregado al carrito!`,
            icon: "success",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#AE3335",
        });
    };

    return (
        <div>
            <section className="card mt-4 mb-4">
                <div className="row no-gutters">
                    <div className="col-md-5 col-lg-3 col-xl-3">
                        <img
                            className="card-img img-fluid"
                            src={img}
                            alt={name}
                        />
                    </div>
                    <div className="col-md-7 col-lg-9 col-xl-9">
                        <div>
                            <div className="d-flex justify-content-between">
                                <div className="card-body">
                                    <h4
                                        className="card-title"
                                        style={{ textAlign: "left" }}
                                    >
                                        {name}
                                    </h4>
                                    <p className="card-text">{description}</p>
                                    <p className="card-text">
                                        Precio: $ {price}
                                    </p>
                                    {stock > 0 ? (
                                        <p className="card-text">
                                            Stock: {stock}
                                        </p>
                                    ) : (
                                        <h6
                                            className="card-text"
                                            style={{ textAlign: "left" }}
                                        >
                                            SIN STOCK!
                                        </h6>
                                    )}
                                    {stock > 0 ? (
                                        isInCart(id) ? (
                                            <div className="row">
                                                <NavLink className="col-sm-6 col-md-6 mb-2" to="/cart">
                                                    <button className="btn btn-danger card-add">
                                                        Terminar mi compra
                                                    </button>
                                                </NavLink>
                                                <NavLink className="col-sm-6 col-md-6 mb-2" to="/">
                                                    <button className="btn btn-secondary card-add">
                                                        Continuar comprando
                                                    </button>
                                                </NavLink>
                                            </div>
                                        ) : (
                                            <ItemCount
                                                initial={1}
                                                stock={stock}
                                                onAdd={handleAdd}
                                            />
                                        )
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ItemDetail;
