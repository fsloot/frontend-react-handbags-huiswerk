import React from 'react';
import './App.css';
import ButtonClick from "./components/Button";
import Product from "./components/Products";
import Tile from "./components/Tile";
import handbag1 from "./assets/bag_1.png";
import handbag2 from "./assets/bag_2.png";
import handbag3 from "./assets/bag_3.png";
import handbag4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import ourStory from "./assets/our_story.png";


function App() {
    function btnClick() {
        console.log('Hallo!')
    }

    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <ButtonClick
                    buttonType="button"
                    buttonOnClick={btnClick}
                    description="to the collection"
                />
                <ButtonClick
                    buttonType="button"
                    buttonOnClick={btnClick}
                    description="shop all bags"
                />
                <ButtonClick
                    buttonType="button"
                    buttonOnClick={btnClick}
                    description="pre-orders"
                    notEnabled={true}
                />
            </nav>
            <main>
                <Product
                    indicator="Best seller"
                    image={handbag1}
                    productText="The handy bag"
                    price="€400,-"
                />
                <Product
                    indicator="Best seller"
                    image={handbag2}
                    productText="The stylish bag"
                    price="€250,-"
                />
                <Product
                    indicator="New collection"
                    image={handbag3}
                    productText="The simple bag"
                    price="€300,-"
                />
                <Product
                    indicator="New collection"
                    image={handbag4}
                    productText="The trendy bag"
                    price="€150,-"
                />
            </main>
            <footer>
                {/*Ik heb in de App.css voor de section de flexbasis gewijzigd van 350px naar 50%,*/}
                {/*anders werden de sections niet goed geordend. */}
                <Tile>
                    <img src={brand} alt="brand" />
                </Tile>
                <Tile>
                    <h2>the brand</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae consectetur, dolor ducimus ea eveniet explicabo fuga illo inventore iure</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae consectetur, dolor ducimus ea eveniet explicabo fuga illo inventore iure</p>
                </Tile>
                <Tile>
                    <h2>our story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae consectetur, dolor ducimus ea eveniet explicabo fuga illo inventore iure</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae consectetur, dolor ducimus ea eveniet explicabo fuga illo inventore iure</p>
                </Tile>
                <Tile>
                    <img src={ourStory} alt="our-story" />
                </Tile>
            </footer>
        </>
    );
}

export default App;



