import logo from './logo.svg';
import './App.css';
import Componente1 from './Componente1';
import Prodotto from './Product';


const primaCard = {
  nome: '10€ Amazon',
  img: 'https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f7191.jpg',
  prezzo: 2.16,
  costoFinale: 6.99,
};

const secondaCard = {
  nome: 'Mascherine 50pz',
  img: 'https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f7191.jpg',
  prezzo: 8,
  costoFinale: 10.99,
};

function App() {
  return (
    <div className="App">
      <h2>La Nostra Prima Card</h2>
      <section className='card-section'>
        {/*
        invece che passare tutti i parametri uno per uno 
        passo i parametri in questa forma ...[nome_dell_oggetto]
        in questo modo sto passando tutti i parametri senza però elencarli tutti
        */}
        <Prodotto {...primaCard} />
        <Prodotto {...secondaCard} />
      </section>
    </div>
  );
}

export default App;
