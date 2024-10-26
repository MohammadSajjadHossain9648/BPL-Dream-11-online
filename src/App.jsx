import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import PlayerSelection from './components/PlayerSelection/PlayerSelection';
import Footer from './components/Footer/Footer';

function App() {
  const [coins, setCoins] = useState(0);

  const handleToAddCoin = () => {
    const newCoins = coins + 4000000;
    setCoins(newCoins);
  };

  //conditional rendering in PlayerSelection header
  const[isActive, setIsActive] = useState({
    page: "available",
    status: true,
  });

  const handlePageChange = (page) => {
    if(page === "available"){
      setIsActive({
        page: "available",
        status: true,
      });
    }
    else{
      setIsActive({
        page: "selected",
        status: false,
      });
    }
  }

  //check the player is sold or not
  const [selectedPlayers, setSelectedPlayers] = ([]);

  const handleToChoosePlayer = (player) => {
    const {name, bidding_price} = player;

    //check balance to bid a player
    if(coins < bidding_price){
      alert("Insufficient funds for this bid!")
      return ;
    }

    //check the player is already selected or not
    selectedPlayers.map(selectedPlayer => {
      if(selectedPlayer.name === name){
        alert("Player is already selected!")
        return ;
      }
    });

    const updateSelectedPlayer = [...selectedPlayers, player];
    setSelectedPlayers(updateSelectedPlayer);

    console.log(selectedPlayers);
  }

  return (
    <>
      <div className="sm:mx-4 md:mx-12 lg:mx-20">
        {/* header section */}
        <Header coins={coins} handleToAddCoin={handleToAddCoin}></Header>

        {/* player section */}
        <PlayerSelection
            isActive={isActive}
            handlePageChange={handlePageChange}
            handleToChoosePlayer={handleToChoosePlayer}
        ></PlayerSelection>
      </div>
      
      {/* footer section */}
      <Footer></Footer>
    </>
  )
}

export default App
