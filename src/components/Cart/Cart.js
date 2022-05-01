import { addDoc, collection, Timestamp, writeBatch, documentId, getDocs, where, query } from "@firebase/firestore";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { firestoreDB } from "../../services/firebase";
import ItemCart from "../ItemCart/ItemCart";
import ItemCartContainer from "../ItemCartContainer/ItemCartContainer";

const Cart = () => {
    const [objUser, setObjUser] = useState({name: "", phone: "", email: "", email2: ""});
    const [loading, setLoading] = useState(false);
    const { cart, getTotal, isEmpty, clearCart } = useContext(CartContext);
    console.log(cart);

    const createOrder = (e) => {
        e.preventDefault();

        const { name, phone, email, email2 } = objUser;

        if(email !== email2){
            console.log("Hubo un error");
            return;
        }

        setLoading(true);
        
        const objOrder = {
            items: cart,
            buyer: {
                name,
                phone, 
                email
            }, 
            total: getTotal(),
            date: Timestamp.fromDate(new Date())
        };

        console.log(objOrder);

        const ids = cart.map(prod => prod.id);
        const batch = writeBatch(firestoreDB);
        const collectionRef = collection(firestoreDB, 'products');
        const outOfStock = [];

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data();
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity;

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } 
                    else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
            })
        }).then(() => {
            if(outOfStock.length === 0) {
                const collectionRef = collection(firestoreDB, 'orders');
                return addDoc(collectionRef, objOrder);
            } 
            else {
                return Promise.reject({ name: 'outOfStockError', products: outOfStock });
            }
        }).then(({ id }) => {
            batch.commit()
            console.log(`El id de la orden es ${id}`);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        });
    };

    const handleInputChange = (e) => {
        setObjUser({
            ...objUser,
            [e.target.name]: e.target.value
        });

        console.log(objUser);
    };

    return(
        <div className="container mt-4 mb-4">
            <div className="row">
                <ItemCartContainer />
                <aside className="col-lg-4 col-md-4 col-sm-4">
                    {
                        !isEmpty() ? 
                        <>
                            <section className="mb-4">
                                <div className="d-grid gap-2 mb-3">
                                    <button type="submit" className="btn btn-secondary" onClick={ () => clearCart() }  >Vaciar carrito</button>
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
                                    <form onSubmit={ createOrder }>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="name">Nombre completo</label>
                                            <input name="name" placeholder="Nombre completo" type="text" className="form-control"  onChange={ handleInputChange } />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="phone">Teléfono de contacto</label>
                                            <input name="phone" placeholder="Teléfono de contacto" type="number" className="form-control" onChange={ handleInputChange } />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="email">Email</label>
                                            <input name="email" placeholder="Email" type="email" className="form-control" onChange={ handleInputChange } />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="email2">Repita email</label>
                                            <input name="email2" placeholder="Email" type="email" className="form-control" onChange={ handleInputChange } />
                                        </div>
                                        
                                        <div className="d-grid gap-2 mb-3">
                                            <button type="submit" className="btn btn-danger">Realizar compra</button>
                                        </div>
                                    </form>
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