import logo from './logo.svg';
import './App.css';
import Componente1 from './Componente1';
import Prodotto from './Product';

function App() {
  return (
    <div className="App">
      <h2>La Nostra Prima Card</h2>
      <Prodotto />
      <Prodotto />
      <Prodotto />
      <Prodotto />
      {/*<Componente1 />*/}
    </div>
  );
}

export default App;
