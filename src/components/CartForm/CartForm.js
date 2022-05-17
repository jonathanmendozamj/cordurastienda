import { Timestamp } from "@firebase/firestore";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import Swal from "sweetalert2";
import Spinner from "../Spinner/Spinner";
import withReactContent from "sweetalert2-react-content";
import { createNewOrder } from "../../services/firebase/firestore";

const CartForm = () => {
    const [buyer, setBuyer] = useState({
        name: "",
        phone: "",
        email: "",
        email2: "",
    });
    const [loading, setLoading] = useState(false);
    const [isEnabledSubmit, setIsEnabledSubmit] = useState(false);
    const { cart, getTotal, clearCart } = useContext(CartContext);

    const newAlert = withReactContent(Swal);

    const createOrder = (e) => {
        e.preventDefault();

        setLoading(true);

        const { name, phone, email } = buyer;

        const objOrder = {
            items: cart.map(({ id, name, quantity, price }) => {
                return { id, name, quantity, price };
            }),
            buyer: {
                name,
                phone,
                email,
            },
            total: getTotal(),
            date: Timestamp.fromDate(new Date()),
        };

        createNewOrder(objOrder)
            .then(({ id }) => {
                handleSuccess(id);
            })
            .catch((error) => handleError(error))
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        setIsEnabledSubmit(
            isFullAllFields(buyer) && buyer.email === buyer.email2
        );
    }, [buyer]);

    const handleSuccess = (id) => {
        newAlert.fire({
            title: "Muchas gracias por tu compra!",
            html: `<p>Tu código de orden de compra es ${id}.</p>
                <p>Esperemos que lo disfrutes!</p>`,
            icon: "success",
            confirmButtonColor: "#AE3335",
            confirmButtonText: "Aceptar",
        });

        clearCart();
    };

    const handleError = (error) => {
        let textAlert = "<p>Hubo un error, no se realizó la orden de compra.</p>";

        if (error.name === "outOfStockError") {
            if (Array.isArray(error.products) && error.products?.length > 0) {
                let titleProductsOutOfStock = "<h6>PRODUCTOS FALTANTES</h6>";
                let productsOutOfStock = "";

                error.products?.forEach((prod) => {
                    productsOutOfStock += `<p>- ${prod.name}</p>`;
                });

                textAlert = `${textAlert}\n\n ${titleProductsOutOfStock} ${productsOutOfStock}`;
            }
        }

        newAlert.fire({
            html: textAlert,
            icon: "error",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#AE3335",
        });
    };

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        });
    };

    const isFullAllFields = (object) => {
        for (let key in object) {
            if (object[key] === "") {
                return false;
            }
        }
        return true;
    };

    useEffect(() => {
        return () => {
            setBuyer({});
            setLoading(false);
        };
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <section className="card mb-4">
            <div className="card-header">Datos de contacto</div>
            <div className="card-body">
                <form onSubmit={createOrder}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">
                            Nombre completo
                        </label>
                        <input
                            name="name"
                            placeholder="Nombre completo"
                            type="text"
                            className="form-control"
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="phone">
                            Teléfono de contacto
                        </label>
                        <input
                            name="phone"
                            placeholder="Teléfono de contacto"
                            type="number"
                            className="form-control"
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <input
                            name="email"
                            placeholder="Email"
                            type="email"
                            className="form-control"
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="email2">
                            Repita email
                        </label>
                        <input
                            name="email2"
                            placeholder="Email"
                            type="email"
                            className="form-control"
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <p className="text-danger">
                            * Todos los campos son obligatorios.
                        </p>
                    </div>

                    <div className="d-grid gap-2 mb-3">
                        <button
                            type="submit"
                            className="btn btn-danger"
                            disabled={!isEnabledSubmit}
                        >
                            Realizar compra
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CartForm;
