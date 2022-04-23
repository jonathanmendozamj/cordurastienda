import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import ItemCount from './../ItemCount/ItemCount';

const ItemDetail = ({ id, img, name, description, price, stock }) => {
    const { addItem, isInCart } = useContext(CartContext);

    const handleAdd = (count) => {
        const productObj = {
            id, 
            name, 
            price, 
            img, 
            quantity: count
        };

        addItem(productObj);
    };

    return (
        <div>
            <section className="card mt-4 mb-4">
                <div className="row no-gutters">
                    <div className="col-sm-5">
                        <img className="card-img" src={ img } alt={ name } />
                    </div>
                    <div className="col-sm-7">
                        <div className="card-body">
                            <h4 className="card-title" style={{ textAlign: "left" }}>{ name }</h4>
                            <p className="card-text">{ description }</p>
                            <p className="card-text">Precio: $ { price }</p>
                            <p className="card-text">Stock: { stock }</p>
                        </div>
                        <div className="card-body">
                            {
                                isInCart(id) ?
                                <NavLink to="/cart">
                                    <button className="btn btn-danger card-add">Terminar mi compra</button>
                                </NavLink> : 
                                <ItemCount initial={ 1 } stock={ stock } onAdd={ handleAdd }/>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ItemDetail;