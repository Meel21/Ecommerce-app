
import './App.css';
import Body from './components/Body/Body';
import NavBar from './components/NavBar/NavBar';
import Welcome from './components/Welcome/welcome';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'



function App() {
  return (
    <>
      <BrowserRouter>
     <NavBar/>

     <Routes>
      <Route path='/' element = {  <ItemListContainer texto ='Catalogo de Productos'/>}/>
      <Route path='/categoria/:categoriaid' element = {  <ItemListContainer texto ='Catalogo de Productos'/>}/>
      <Route path='/detalle/:detalleId' element ={<ItemDetailContainer/>}/>
      <Route path='/item' element ={<Welcome name="Melina" />}/> 
      
     </Routes>

     </BrowserRouter>
    </>  
  );
}

export default App;
