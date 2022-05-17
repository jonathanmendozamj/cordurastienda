import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartTotal = () => {
	const { getTotal, clearCart } = useContext(CartContext);

	return (
		<>
			<section className="mb-4">
				<div className="d-grid gap-2 mb-3">
					<button
						type="submit"
						className="btn btn-secondary"
						onClick={() => clearCart()}
					>
						Vaciar carrito
					</button>
				</div>
			</section>

			<section className="card mb-4">
				<div className="card-header">Resumen</div>
				<div className="card-body mb-0">
					<div className="d-flex justify-content-between">
						<h5 className="float-left">TOTAL</h5>
						<h5 className="float-right">$ {getTotal()}</h5>
					</div>
				</div>
			</section>
		</>
	);
};

export default CartTotal;
