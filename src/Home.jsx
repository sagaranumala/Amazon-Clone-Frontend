import React from "react";
import "./Home.css";
import Product from "./Product";
import Slider from "./Slider";

function Home() {
  return (
    <>
    <Slider/>
    <div className="home">
       <div className="home__container">
        <div className="home__row">
          <Product
            id="12321341"
            image="https://m.media-amazon.com/images/I/71eUw15rVbL._SX679_.jpg"
            title="Samsung 108 cm (43 inches) | Crystal 4K Series Ultra HD | Smart LED TV | UA43AUE60AKLXL (Black)"
            price={375}
            rating={5}
          />
          <Product
            id="49538094"
            title="Amazon Brand - Symactive Rider S1000 Series, 26T Single Speed Mountain Bike, Dual V-Brake, Frame Size: 18 inch, Steel Stem & Bar (Dark Grey, Unisex)"
            price={125}
            rating={4}
            image="https://m.media-amazon.com/images/I/81XLMmhI1aL._SX522_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Apple iPhone 14 128GB Midnight | 15.40 cm (6.1-inch) Super Retina XDR display
            Advanced camera system for better photos in any light"
            price={930}
            rating={5}
            image="https://m.media-amazon.com/images/I/31wacBawB3L._SY445_SX342_QL70_FMwebp_.jpg"
          />
          <Product
            id="23445930"
            title="realme Narzo 50 Pro 5G (Hyper Black 6GB RAM+128GB Storage) Dimensity 920 5G Processor |90Hz Super AMOLED Display"
            price={225}
            rating={5}
            image="https://m.media-amazon.com/images/I/41VnUfgcBqL._SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="3254354345"
            title="Apple 2022 iPad Air M1 Chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Blue (5th Generation)"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/41L1Fw2xgOL._SY445_SX342_QL70_FMwebp_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung - 34-inch Premium Curved Monitor with 21:9 Wide Screen, USB Type C Connectivity & Ultra WQHD Resolution - LC34H890WJWXXL"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71qkzkC7bHL._SX679_.jpg"
          />
        </div>
      </div>
      </div>
    </>
  );
}

export default Home;
