import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Macbook Pro: Honestly do you really want to use anything else?"
            price={999.99}
            rating={5}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-silver-select-201911?wid=892&hei=820&&qlt=80&.v=1572825196932"
          />
          <Product
            id="49538094"
            title="Emergency Kansas City Cookout GO BAG!!!"
            price={50.0}
            rating={10}
            image="https://www.kroger.com/product/images/large/front/0009996739607"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Big Bang Theory box set! #BAZINGA"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81CQ8Q-wD2L._SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Deathstar Plans! If you can build it, you can have it!"
            price={1.0}
            rating={5}
            image="https://cdn.shopify.com/s/files/1/1402/8033/products/STW005_PRO_StarWarsDeathStar1000pcJigsawPuzzle_03_LO_2000x_b99bd59a-18b6-4a60-bc87-dd6afe2a2c29_700x700.jpg?v=1607101344"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={350.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Rubber Ducky: I mean c'mon... you love it."
            price={0.01}
            rating={5}
            image="https://i.pinimg.com/originals/38/a4/b7/38a4b7f301d8ad3435be8bb3d23e4c11.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
