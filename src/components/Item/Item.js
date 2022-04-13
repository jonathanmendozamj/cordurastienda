import { NavLink } from "react-router-dom";

const Item = ({ id, img, name, price, stock }) => {
    const handleOnClick = () => {
        console.log(`Hizo click en "Ver detalle" de ${ name }`)
    };

    return(
        <div className="col-md-4">
            <section className="card">
                <img className="card-img-top img-fluid" src={ img } alt={ name } />
                <div className="card-body">
                    <h5 className="card-title" style={{ textAlign: "left" }}> { name }</h5>
                    <p  className="card-text"> $ { price }</p>
                </div>
                <div className="card-body">
                    <NavLink to={`/detail/${id}`}>
                        <button className="btn btn-danger card-add" onClick={ handleOnClick } >Ver Detalle</button>
                    </NavLink>
                </div>
            </section>
        </div>
    );
};

export default Item;