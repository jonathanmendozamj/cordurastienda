import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const onClickAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const onClickSubtract = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    };

    return (
        <div className="mb-3 input-group">
            <button
                className="btn btn-outline-danger"
                type="button"
                title="Quitar al carrito"
                onClick={onClickSubtract}
                disabled={count === initial}
            >
                -
            </button>
            <div className="form-control text-center">{count}</div>
            <button
                className="btn btn-outline-danger"
                type="button"
                title="Sumar al carrito"
                onClick={onClickAdd}
                disabled={count === stock}
            >
                +
            </button>
            <button
                className="btn btn-danger mx-2"
                onClick={() => onAdd(count)}
            >
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;
