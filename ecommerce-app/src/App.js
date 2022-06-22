
import './App.css';
import Body from './components/Body/Body';
import NavBar from './components/NavBar/NavBar';
import Welcome from './components/welcome';
import ItemListContainer from './ItemListContainer/ItemListContainer';


function App() {
  return (
    <div>
     <NavBar/>
     <ItemListContainer texto ='Catalogo de Productos'/>
     <Welcome name="Melina" />
     <Body/>
    </div>  
  );
}

export default App;
