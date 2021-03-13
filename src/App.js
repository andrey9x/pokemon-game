import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import PokemonCard from "./components/PokemonCard";

import './App.css';

import Bg1 from './assets/bg1.jpg';
import Bg2 from './assets/bg2.jpg';

import POKEMONS from './pokemons.json';

const App = () => {
    return (
        <>
            <Header
                title="Header title"
            />
            <Layout
                title="Layout#1 Title"
                urlBg={Bg1}
            >
                In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.
            </Layout>
            <Layout
                title="Layout#2 Title"
                urlBg={Bg2}
            >
                To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
            </Layout>
            <Layout
                title="Layout#3 Title"
                colorBg="grey"
            >
                <div className="flex">
                    {
                        POKEMONS.map(item => (
                            <PokemonCard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                type={item.type}
                                img={item.img}
                                values={item.values}
                            />
                        ))
                    }
                </div>
            </Layout>
            <Footer />
        </>
    );
};

export default App;
