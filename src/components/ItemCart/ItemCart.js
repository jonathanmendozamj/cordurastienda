import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { BsTrashFill } from 'react-icons/bs';

const ItemCart = ({ id, img, name, quantity, price }) => {
	const { removeItem } = useContext(CartContext);

	return(
		<section className="card mb-4">
			<div className="row">
				<div className="col-md-5 col-lg-3 col-xl-3">
					<img className="card-img img-fluid my-2 mx-2" width="70" src={ img } alt={ name } />
				</div>
				<div className="col-md-7 col-lg-9 col-xl-9">
					<div className="my-2 mx-2">
						<div className="d-flex justify-content-between">
							<h5 className="card-title">{ name }</h5>
							<span className="badge bg-danger">{ quantity }</span>
						</div>
						<div className="d-flex justify-content-between align-items-center">
							<p className="card-text">Subtotal: $ { quantity * price }</p>
						</div>
						<div className="d-flex justify-content-between align-items-center">
							<button className="card-text btn btn-outline-danger btn-block btn-sm" onClick={ () => removeItem(id)  }>
								<BsTrashFill /> Eliminar
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ItemCart;