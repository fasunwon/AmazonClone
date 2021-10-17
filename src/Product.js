import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
function Product({title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    //console.log(basket);
    const addToBasket = ()=>{
        //dispatch item into datalayer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <img src={image} 
            alt="" />
                <div className="product__rating">
                    {Array(rating).fill().map((_, i)=>(
                        <p>⭐</p>
                    ))}

                </div>
            <button onClick={addToBasket}>Add To Bag</button>
        </div>
    )
}

export default Product
