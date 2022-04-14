import ItemCount from './../ItemCount/ItemCount';

const ItemDetail = ({ detail }) => {
    console.log(detail);

    return (
        <div>
            <section className="card mt-4 mb-4">
                <div className="row no-gutters">
                    <div className="col-sm-5">
                        <img className="card-img" src={ detail.img } alt={ detail.name } />
                    </div>
                    <div className="col-sm-7">
                        <div className="card-body">
                            <h4 className="card-title" style={{ textAlign: "left" }}>{ detail.name }</h4>
                            <p className="card-text">{ detail.description }</p>
                            <p className="card-text">Precio: $ { detail.price }</p>
                            <p className="card-text">Stock: $ { detail.stcck }</p>
                        </div>
                        <div className="card-body">
                            <ItemCount initial={ 1 } stock={ detail.stock }/>
                            <button className="btn btn-danger card-add" >Comprar</button>
                        </div>
                    </div>
                </div>
                
                
            </section>
        </div>
    );
};

export default ItemDetail;