import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartTotal = () => {
	const { getTotal } = useContext(CartContext);

	return (
		<section className="card mb-4">
            <div className="card-header">Resumen</div>
            <div className="card-body mb-0">
                <div className="d-flex justify-content-between">
                    <h5 className="float-left">TOTAL</h5>
                    <h5 className="float-right">$ {getTotal()}</h5>
                </div>
            </div>
        </section>
	);
};

export default CartTotal;
