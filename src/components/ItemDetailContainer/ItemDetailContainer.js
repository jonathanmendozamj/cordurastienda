import { useEffect, useState } from "react";
import { getProductsById } from "../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ id }) => {
    const [detail, setDetail] = useState({});

    useEffect(() => {
        getProductsById(id).then(res => {
            console.log(res);
            setDetail(res);
        })
        .catch(err => console.error(err))
        .finally(() => {
            console.log('Finalizó la promesa');
        });
    }, [id]);

    return (
        <div>
            <ItemDetail detail={ detail } />
        </div>
    );
};

export default ItemDetailContainer;