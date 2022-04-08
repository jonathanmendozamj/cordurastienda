const ItemDetail = ({ detail }) => {
    console.log(detail);

    return (
        <div>
            <div>
                <img className="img-fluid" src={ detail.img } alt={ detail.name } />
                <p>{ detail.name }</p>
                <p>{ detail.description }</p>
                <p>$ { detail.price }</p>
            </div>
        </div>
    );
};

export default ItemDetail;