import React from 'react';

const Prodotto = (props) => {
    const alt = 'valore';
    const img = 'https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f7191.jpg'
    console.log(props.numero);
    return (
      <article>
        <div className='card'>
          <img src={props.img} alt={alt} />
          <h3>{props.nome}</h3>
          <div className='spacer'></div>
          <h2 className='price'>{props.prezzo}€</h2>
          <h2 className='time'>00:10</h2>
          <div className='puntata'>
            <p>{props.costoFinale.toString()}</p>
          </div>
        </div>
  
      </article>
    )
  }

  export default Prodotto;
