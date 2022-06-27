
import './App.css';
import Body from './components/Body/Body';
import NavBar from './components/NavBar/NavBar';
import Welcome from './components/Welcome/welcome';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div>
     <NavBar/>
     <ItemListContainer texto ='Catalogo de Productos'/>
     <Welcome name="Melina" />
     <Body/>
     <ItemCount stock={8}/>
    </div>  
  );
}

export default App;
