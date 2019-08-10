import React from 'react';
import './productsList.css';

const productsList=(props)=>{

    const nombres=[];

    const products=props.products.map((product)=>{

        props.nombre_seller.forEach(data => {

            if(product.seller.id===data.data.id){

                if(nombres.length ===0){
                    nombres.push(data.data.nickname);
                }
            }
            
        });

        return(

              <div key={product.id}>
                <img alt={product.tags[1]} src={product.thumbnail} />
                <ul className="ul">
                    <li><h3>{product.title}</h3></li>
                    <li><h4 className="precio">Precio: $ {product.price}</h4></li>
                    {props.nombre_seller.map((nombre) => (
                        (product.seller.id===nombre.data.id? <div key={nombre.data.id}><li><h4>Vendedor: {nombre.data.nickname}</h4></li></div>:null)
                        ))}
                    <li><h4>Id Vendedor: {product.seller.id}</h4></li>
                    <li><h4>Disponibles en Stock: {product.available_quantity}</h4></li>
                </ul>
                
            </div>

        );


    });

    return (
        <div className="products-list">
            {products}
        </div>
    );

};

export default productsList;