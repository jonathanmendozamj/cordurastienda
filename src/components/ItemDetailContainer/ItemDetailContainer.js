import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductsById } from "../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);

    const { productId } = useParams();

    useEffect(() => {
        getProductsById(productId).then(res => {
            console.log(res);
            setDetail(res);
        })
        .catch(err => console.error(err))
        .finally(() => {
            setLoading(false);
            console.log('Finalizó la promesa');
        });
    }, [productId]);

    return (
        <div className="container">
            <div className="row">
            {
                loading ? 
                <h3>Cargando...</h3> :
                detail ? 
                <ItemDetail detail={ detail } /> : 
                <h1>El producto no existe</h1> 
            }
            </div>
        </div>
    );
};

export default ItemDetailContainer;