import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductsById } from "../../services/firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";

const ItemDetailContainer = () => {
	const [detail, setDetail] = useState({});
	const [loading, setLoading] = useState(true);

	const { productId } = useParams();

	useEffect(() => {
		getProductsById(productId)
			.then((res) => {
				setDetail(res);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [productId]);

	return (
		<div className="container">
			<div className="row">
				{loading ? (
					<Spinner />
				) : detail ? (
					<ItemDetail {...detail} />
				) : (
					<h1>El producto no existe</h1>
				)}
			</div>
		</div>
	);
};

export default ItemDetailContainer;
