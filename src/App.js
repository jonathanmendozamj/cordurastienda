import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './scss/estilos.scss';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
	return (
		<div className="App">
			<main className="d-flex flex-column min-vh-100">
				<CartContextProvider>
					<BrowserRouter>
						<NavBar />
						<Routes>
							<Route path='/' element={ <ItemListContainer /> } />
							<Route path='/category/:categoryId' element={ <ItemListContainer /> } />
							<Route path='/detail/:productId' element={ <ItemDetailContainer /> } />
							<Route path='*' element={ <h1>404 NOT FOUND</h1> }/>
							<Route path='/cart' element={ <Cart /> } />
						</Routes>
						<Footer />
					</BrowserRouter>
				</CartContextProvider>
			</main>
		</div>
	);
}

export default App;
