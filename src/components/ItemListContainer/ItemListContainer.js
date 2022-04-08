import ItemList from "../ItemList/ItemList";
import { getProducts } from "../asyncmock";
import { useEffect, useState } from "react";

const ItemListContainer = (props) => {
    console.log("Entro a la f() ItemListContainer");
    console.log(props);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(prods => {
            setProducts(prods);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            console.log('Finalizó la promesa');
        });
    }, []);


    return(
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-9 col-sm-8">
                        <div id="contenedorProductos" className="row">
                            <ItemList products={ products } />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ItemListContainer;