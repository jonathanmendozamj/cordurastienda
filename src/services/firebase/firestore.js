import { getDocs, collection, orderBy, query, where, getDoc, doc } from "@firebase/firestore";
import { firestoreDB } from "./index";

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId 
            ? query(collection(firestoreDB, "products"), where("category", "==", categoryId))
            : query(collection(firestoreDB, "products"), orderBy("name", "asc"));

        getDocs(collectionRef).then(response => {
            console.log('Volvio');
            console.log(response);

            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() };
            });

            resolve(products);
        }).catch(error => {
            reject(error);
        });
    })
    
};

export const getProductsById = (productId) => {
    return new Promise((resolve, reject) => {
        getDoc(doc(firestoreDB, 'products', productId)).then(response => {
            console.log(response);
            const product = { id: response.id, ...response.data() };
            resolve(product);
        })
        .catch(error => {
            reject(error);
        });
    });
};

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        const collectionRef = query(collection(firestoreDB, "categories"), orderBy("order", "asc"));

        getDocs(collectionRef).then(response => {
            console.log('Volvio');
            console.log(response);

            const categories = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() };
            });

            resolve(categories);
        }).catch(error => {
            reject(error);
        });
    });
};