import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

const handleOnAdd = (quantity) => {
  console.log(`Se agregaron ${ quantity } productos.`);
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>

      <ItemListContainer greeting={ "Hola a todos!!" } />
      <ItemCount initial={ 1 } stock={ 10 } onAdd={ handleOnAdd }/> 
      <ItemDetailContainer id={ 1 }/>
    </div>
  );
}

export default App;
