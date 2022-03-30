import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const onClickAdd = () => {
        console.log('Entro en onClickAdd()');

        if(count < stock){
            setCount(count + 1);
        }
    };

    const onClickSubtract = () => {
        console.log('Entro en onClickSubtract()');
        
        if(count > initial){
            setCount(count - 1);
        }
    };

    return (
        <div class="mb-3 input-group">
            <button class="btn btn-outline-danger" type="button" title="Quitar al carrito" onClick={ onClickSubtract } disabled={ count === initial }>-</button>
            <div class="form-control">{ count }</div>
            <button class="btn btn-outline-danger" type="button" title="Sumar al carrito" onClick={ onClickAdd } disabled={ count === stock }>+</button>
        </div>
    );
};

export default ItemCount;