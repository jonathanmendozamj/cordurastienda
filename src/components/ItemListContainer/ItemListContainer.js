import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SideBar from "../SideBar/SideBar";
import { getProducts } from "../../services/firebase/firestore";

const ItemListContainer = (props) => {
    console.log("Entro a la f() ItemListContainer");

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    

    useEffect(() => {
        setLoading(true);

        getProducts(categoryId).then(prods => {
            console.log('Volvio');
            console.log(prods);
            setProducts(prods);
        }).catch(error => {
            console.error(error);
        }).finally(() => {
            console.log('Finalizó la promesa');
            setLoading(false);
        });

    }, [categoryId]);

    return(
        <main>
            <div className="container contenedor-principal">
                <div className="row">
                    <SideBar />
                    <div className="col-lg-9 col-md-9 col-sm-8">
                        <div id="contenedorProductos" className="row">
                            {
                                loading ? 
                                <h3>Cargando...</h3> :
                                (products && products.length > 0 ?
                                <ItemList products={ products } /> :
                                <h1>No hay productos disponibles</h1>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ItemListContainer;