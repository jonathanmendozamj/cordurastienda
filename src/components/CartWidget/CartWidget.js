import { BsCartFill } from 'react-icons/bs';
import { Button } from 'react-bootstrap';

const CartWidget = (props) => {
    console.log("Entró a la f() CartWidget");
    console.log(props.count);

    return(
        <div>
            <Button type="button" variant="btn btn-light">
                <BsCartFill /> Artículos  
                <span className="badge bg-danger">{ props.count }</span>
            </Button>
        </div>
    );
};

export default CartWidget;