const Item = ({ id, img, name, price, stock }) => {
    const handleOnClick = () => {
        console.log(`Hizo click en "Ver detalle" de ${ name }`)
    };

    return(
        <div className="col-md-4">
            <section className="card">
                <img src={ img } className="card-img-top img-fluid" alt={ name } />
                <div className="card-body">
                    <h5 className="card-title" style={{ textAlign: "left" }}> { name }</h5>
                    <p  className="card-text"> $ { price }</p>
                    <p  className="card-text"> Stock: { stock }</p>
                    <button id={ id } className="btn btn-danger card-add" onClick={ handleOnClick }  >Ver Detalle</button>
                </div>
            </section>
        </div>
    );
};

export default Item;