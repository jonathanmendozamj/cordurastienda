import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SideBar from "../SideBar/SideBar";
import { getProducts } from "../../services/firebase/firestore";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        getProducts(categoryId)
            .then((prods) => {
                setProducts(prods);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    return (
        <div className="container contenedor-principal">
            <div className="row">
                <SideBar />
                <div className="col-lg-9 col-md-9 col-sm-8">
                    <div id="contenedorProductos" className="row">
                        {loading ? (
                            <Spinner />
                        ) : products && products.length > 0 ? (
                            <ItemList products={products} />
                        ) : (
                            <h1>No hay productos disponibles</h1>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;
