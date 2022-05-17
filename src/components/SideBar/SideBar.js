import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../services/firebase/firestore";
import Spinner from "../Spinner/Spinner";

const SideBar = () => {
	const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

	useEffect(() => {
        setLoading(true);

		getCategories()
			.then((categories) => {
				setCategories(categories);
			})
            .finally(() => {
                setLoading(false);
            });
	}, []);

    if(loading){
        return <Spinner />;
    }

	return (
		<aside className="col-lg-3 col-md-3 col-sm-4">
			<div className="card">
				<div className="card-header">Novedades</div>
				<div className="card-body">
					<p>Muy pronto vamos a estar en Villa Gesell.</p>
				</div>
			</div>

			<div className="card mt-3 mb-3">
				<div className="card-header">Categorías</div>
				<div
					className="list-group list-group-flush"
					id="categoriesList"
				>
					<Link
						data-categoryindex="all"
						to="/"
						className="category-link-all category-link list-group-item list-group-item-action active-category category-list-item-all categoria-productos"
						id="todas"
					>
						TODAS
					</Link>
					{categories.map((category) => (
						<Link
							key={category.id}
							data-categoryindex="all"
							to={`/category/${category.id}`}
							className="category-link-all category-link list-group-item list-group-item-action active-category category-list-item-all categoria-productos"
						>
							{category.description}
						</Link>
					))}
				</div>
			</div>
		</aside>
	);
};

export default SideBar;
