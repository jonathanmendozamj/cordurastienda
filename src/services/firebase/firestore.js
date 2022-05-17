import {
    getDocs,
    collection,
    orderBy,
    query,
    where,
    getDoc,
    doc,
    addDoc,
    documentId,
    writeBatch,
} from "@firebase/firestore";
import { createAdaptedCategoryFromFirestore } from "../../adapters/categoryAdapter";
import { createAdaptedProductFromFirestore } from "../../adapters/productAdapter";
import { firestoreDB } from "./index";

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId
            ? query(
                  collection(firestoreDB, "products"),
                  where("category", "==", categoryId)
              )
            : query(
                  collection(firestoreDB, "products"),
                  orderBy("name", "asc")
              );

        getDocs(collectionRef)
            .then((response) => {
                const products = response.docs.map((doc) =>
                    createAdaptedProductFromFirestore(doc)
                );
                resolve(products);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const getProductsById = (productId) => {
    return new Promise((resolve, reject) => {
        getDoc(doc(firestoreDB, "products", productId))
            .then((response) => {
                const product = createAdaptedProductFromFirestore(response);
                resolve(product);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        const collectionRef = query(
            collection(firestoreDB, "categories"),
            orderBy("order", "asc")
        );

        getDocs(collectionRef)
            .then((response) => {
                const categories = response.docs.map((doc) =>
                    createAdaptedCategoryFromFirestore(doc)
                );
                resolve(categories);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const createNewOrder = (objOrder) => {
    return new Promise((resolve, reject) => {
        const ids = objOrder.items?.map((prod) => prod.id);
        const batch = writeBatch(firestoreDB);
        const collectionRef = collection(firestoreDB, "products");
        const outOfStock = [];

        getDocs(query(collectionRef, where(documentId(), "in", ids)))
            .then((response) => {
                response.docs.forEach((doc) => {
                    const dataDoc = doc.data();
                    const prodQuantity = objOrder.items?.find(
                        (prod) => prod.id === doc.id
                    )?.quantity;

                    if (dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, {
                            stock: dataDoc.stock - prodQuantity,
                        });
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc });
                    }
                });
            })
            .then(() => {
                if (outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDB, "orders");
                    return addDoc(collectionRef, objOrder);
                } else {
                    reject({ name: "outOfStockError", products: outOfStock });
                }
            })
            .then((response) => {
                batch.commit();
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};
