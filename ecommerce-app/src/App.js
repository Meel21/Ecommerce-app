
import './App.css';
import NavBar from './components/NavBar';
import Body from './components/Body';
import Welcome from './components/welcome';

function App() {
  return (
    <div>
     <NavBar/>
     <Welcome name="Melina" />
     <Body/>
    </div>  
  );
}

export default App;
