import React from 'react'

const alt = 'valore';
const img = 'https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f7191.jpg'
const prezzo = '3,20';
const pStyle = {
    textTransform: "uppercase",
};
const Product = () => {
    return (
        <article>
            <div className='card'>
                <img src={img} alt={alt} />
                <h3 style={pStyle}>50€ Carburante + 120P</h3>
                <div className='spacer'></div>
                <h2 className='price'>{2 + 2.16} €</h2>
                <h2 className='time'>00:10</h2>
                <div className='puntata'>
                    <p>punta</p>
                </div>
            </div>

        </article>
    )
}

export default Product
