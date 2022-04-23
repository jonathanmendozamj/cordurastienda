import { BsCartFill } from 'react-icons/bs';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = ({ count }) => {
    console.log("Entró a la f() CartWidget");
    console.log(count);

    const { getQuantity } = useContext(CartContext);

    return(
        <div>
            <div type="button" className="btn btn-light" >
                <BsCartFill />
                 Artículos 
                {
                    <span className="badge bg-danger ml-5"  style={{ display: "inline-block" }}>{ getQuantity() }</span>
                }
            </div>
        </div>
    );
};

export default CartWidget;