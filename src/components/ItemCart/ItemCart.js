import { useContext } from "react";
import CartContext from "../../context/CartContext";

const ItemCart = ({id, img, name, quantity, price}) => {
    const { removeItem } = useContext(CartContext);

    return(
        <section className="card mb-4">
            <div className="row no-gutters">
                <div className="col-sm-2">
                    <img className="card-img" src={ img } alt={ name } />
                </div>
                <div className="col-sm-8 mt-2 mb-2">
                    <h5 className="card-title" style={{ textAlign: "left" }}>{ name }</h5>
                    <p className="card-text">Precio: $ { quantity * price }</p>
                </div>
                <div className="col-sm-2 mt-2 mb-2 text-right">
                    <p><span className="badge bg-danger btn-block"  style={{ display: "inline-block" }}>{ quantity }</span></p>
                    <button className="btn btn-outline-danger btn-block btn-sm" onClick={ () => removeItem(id)  }>Eliminar</button>
                </div>
            </div>
        </section>
    );
};

export default ItemCart;