import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="https://m.media-amazon.com/images/I/71FrdzITB3L._SX3000_.jpg" alt="" />
                
                
                <div className="home__row">
                    {/* product */}
                    <Product title ="BENYAR Men's Watches Perfect Quartz Movement Chronograph Watches for Me Leather Strap Fashion Business Sport Design 30MWaterproof and Scratch Resistant Elegant Gifts for Men" 
                    price={49.99} 
                    image="https://m.media-amazon.com/images/I/61KXUrhKXIL._AC_UL320_.jpg"
                    rating={4}/>
                    <Product title = "T Series Treadmill"
                    price={727.02}
                    image="https://m.media-amazon.com/images/I/31VmMdsL0AL._AC_SY230_.jpg"
                    rating={4}/>
                    <Product title = "REESE Chocolate Candy Peanut Butter Cups, Halloween Candy to Share, Bulk Candy, Miniatures, 900 Gram"
                    price={9.97}
                    image="https://m.media-amazon.com/images/I/71lir+ea76L._AC_SY200_.jpg"
                    rating={5}/>
                    <Product title = "Echo Dot (3rd gen) - Smart speaker with Alexa - Charcoal"
                    price={27.49}
                    image="https://m.media-amazon.com/images/I/41CRnvYqmqL._AC_SY200_.jpg"
                    rating={4}/>
                </div>
                <div className="home__row">
                     <Product title = "Bose QuietComfort 35 II Noise Cancelling Bluetooth Headphones— Wireless, Over Ear Headphones with Built in Microphone and Alexa Voice Control, Black"
                    price={399.00}
                    image="https://m.media-amazon.com/images/I/81+jNVOUsJL._AC_UL320_.jpg"
                    rating={5}/>             
                     <Product title = "Cybuffle E7 Active Noise Cancelling Headphone Bluetooth Headset Wireless Headphone Headphone with Microphone Deep Bass, Comfortable Protein Ear Cushion, 30 Hours Play Time, Suitable for Travel/Work, Black"
                    price={34.99}
                    image="https://m.media-amazon.com/images/I/41UKUaUEraS._AC_UL320_.jpg"
                    rating={5}/>                   
                     <Product title = "Wireless Earbuds Bluetooth 5.0 Headphones,40H Playtime w/Wireless Charging Case,IP6 Waterproof/Button Control/TWS Stereo Bluetooth Earphones in-Ear w/Mic for Running Workout Gym"
                    price={37.99}
                    image="https://m.media-amazon.com/images/I/51raTXcOesL._AC_UL320_.jpg"
                    rating={4}/>                   
                </div>
                <div className="home__row">
                    <Product title = "New Alienware Aurora R10 Gaming Desktop, AMD Ryzen 7 3700X, AMD Radeon RX 5700 XT 8GB GDDR6, 512GB SSD + 1TB HDD, 16GB, Windows 10 Home, AWAUR10-A886BLK-PUS"
                    price={3179}
                    image="https://m.media-amazon.com/images/I/71zqOdsYAzL._AC_UL320_.jpg"
                    rating={5}/>
                </div>
                <div className="home__row">
                    <Product title = "Enya Nova U 23inch Concert Ukulele–Carbon Fiber Travel Ukulele–With Beginner Kit includes Online Lessons, Case, Strap, Capo and Strings (Black)"
                    price={98.99}
                    image="https://m.media-amazon.com/images/I/61Ud2fo3HiS._AC_UL320_.jpg"
                    rating={4}/>
                    <Product title = "Kalimba 17 Keys Thumb Piano - Portable Finger Piano Professional Musical Instrument with Protective Case, Study Instruction, Tuning Hammer Gift for Kids Adults Beginners"
                    price={35.99}
                    image="https://m.media-amazon.com/images/I/71w3+fnmZ7S._AC_UL320_.jpg"
                    rating={5}/>
                </div>
            </div>
        </div>
    )
}

export default Home
