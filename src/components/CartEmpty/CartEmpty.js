import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartEmpty = () => {
    const { clearCart } = useContext(CartContext);

    return (
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
    );
};

export default CartEmpty;