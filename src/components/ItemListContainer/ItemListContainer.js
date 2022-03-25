const ItemListContainer = (props) => {
    console.log("Entro a la f() ItemListContainer");
    console.log(props);

    return(
        <p>{ props.greeting }</p>
    );
};

export default ItemListContainer;