import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import PlayerSelection from './components/PlayerSelection/PlayerSelection';
import Footer from './components/Footer/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  // notify the alert
  const notify1 = () => {
    // toast.warning("Insufficient funds for this bid!");
    toast.warning('Insufficient funds for this bid!', {
      position: "top-center",
      autoClose: 5000,
      });
  }

  const notify2 = (name) => {
    // toast.warning("Insufficient funds for this bid!");
    toast.alert('${name} has already been selected. Please choose another player!', {
      position: "top-center",
      autoClose: 5000,
      });
  }

  const notify3 = (name) => {
    // toast.warning("Insufficient funds for this bid!");
    toast.success('Congrats to ${name}! Excited to see you shine!', {
      position: "top-center",
      autoClose: 5000,
      });
  }
  //check the player is sold or not
  const [selectedPlayers, setSelectedPlayers] = ([]);

  const handleToChoosePlayer = (player) => {
    const {name, bidding_price} = player;

    //check balance to bid a player
    if(coins < bidding_price){
      notify1();
      return ;
    }

    //check the player is already selected or not
    selectedPlayers.map(selectedPlayer => {
      if(selectedPlayer.name === name){
        notify2();
        return ;
      }
    });

    const updateSelectedPlayer = [...selectedPlayers, player];
    setSelectedPlayers(updateSelectedPlayer);

    notify3();
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

      {/* toast notification */}
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
