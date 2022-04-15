import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ItemCount from './../ItemCount/ItemCount';

const ItemDetail = ({ detail }) => {
    const [quantity, setQuantity] = useState(0);
    console.log(detail);

    const handleAdd = (count) => {
        console.log(`La cantidad para agregar es ${ count }`);
        setQuantity(count);
    };

    return (
        <div>
            <section className="card mt-4 mb-4">
                <div className="row no-gutters">
                    <div className="col-sm-5">
                        <img className="card-img" src={ detail.img } alt={ detail.name } />
                    </div>
                    <div className="col-sm-7">
                        <div className="card-body">
                            <h4 className="card-title" style={{ textAlign: "left" }}>{ detail.name }</h4>
                            <p className="card-text">{ detail.description }</p>
                            <p className="card-text">Precio: $ { detail.price }</p>
                            <p className="card-text">Stock: { detail.stock }</p>
                        </div>
                        <div className="card-body">
                            {
                                quantity > 0 ?
                                <NavLink to="/cart">
                                    <button className="btn btn-danger card-add" >Ir al carrito</button>
                                </NavLink> : 
                                <ItemCount initial={ 1 } stock={ detail.stock } onAdd={ handleAdd }/>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ItemDetail;