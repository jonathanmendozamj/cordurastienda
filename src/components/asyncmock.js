const PRODUCTS = [
    {id: 1, name: "Zapatilla I-Run", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quod?", price: 2000, img: "/images/proforce.webp", category: "calzado", stock: 10},
    {id: 2, name: "Zapatilla Nine Mile", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quod?", price: 2250, img: "/images/nine-mile.webp", category: "calzado", stock: 10},
    {id: 3, name: "Buzo", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quod?", price: 2500, img: "/images/buzos.webp", category: "indumentaria", stock: 10},
    {id: 4, name: "Remera Corduras", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quod?", price: 1100, img: "/images/remeras.webp", category: "indumentaria", stock: 10},
    {id: 5, name: "Gorra Corduras", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quod?", price: 700, img: "/images/gorras.webp", category: "accesorios", stock: 10} 
];

const TIME_TIMEOUT_MS = 2000;

export const getProducts = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(PRODUCTS);
    }, TIME_TIMEOUT_MS);
});

export const getProductsById = (id) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(PRODUCTS.find(product => id === product.id));
    }, TIME_TIMEOUT_MS);
});