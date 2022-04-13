import { BsCartFill } from 'react-icons/bs';
import { Button } from 'react-bootstrap';

const CartWidget = ({ count }) => {
    console.log("Entró a la f() CartWidget");
    console.log(count);

    return(
        <div>
            <div type="button" className="btn btn-light" >
                <BsCartFill />
                 Artículos 
                <span className="badge bg-danger ml-5"  style={{ display: "inline-block" }}>{ count }</span>
            </div>
        </div>
    );
};

export default CartWidget;