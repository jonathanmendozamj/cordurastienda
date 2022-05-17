export const createAdaptedProductFromFirestore = (doc) => {
    const data = doc.data();

    const formattedProduct = {
        id: doc.id,
        ...data
    };

    return formattedProduct;
};