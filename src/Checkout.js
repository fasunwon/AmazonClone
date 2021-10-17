import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2019/img/Consumer_Electronics/XCM_Manual_1157235_outlet_header_evergreen_1500x200_Consumer_Electronics_1157235_ca_consumer_electronics_outletheaderevergreen_1500x200_1547469927_jpg.jpg" 
                alt="" 
                className="checkout__ad" />
                <div>
                    {/* <h3>Hello, {user? user?.email.split("@")[0]: "Guest"}</h3> */}
                    <h2 className="checkout__title">
                        Shopping Bag
                    </h2>

                    {/* Checkout Product */}
                    {basket.map(item =>(
                    <div className="product__encapsulate">
                        <CheckoutProduct
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    </div>                       
                    ))}



                </div>
            </div>
                <div className="checkout__right">
                    <Subtotal/>
                </div>
        </div>
    )
}

export default Checkout
