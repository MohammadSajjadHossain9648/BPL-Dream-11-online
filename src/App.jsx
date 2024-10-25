import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import PlayerSelection from './components/PlayerSelection/PlayerSelection';

function App() {
  const [coins, setCoins] = useState(0);
  const[isActive, setIsActive] = useState({
    page: "available",
    status: true,
  });


  const handleToAddCoin = () => {
    const newCoins = coins + 4000000;
    setCoins(newCoins);
  };

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

  return (
    <>
      <div className="sm:mx-4 md:mx-12 lg:mx-20">
        {/* header section */}
        <Header coins={coins} handleToAddCoin={handleToAddCoin}></Header>

        {/* player section */}
        <PlayerSelection isActive={isActive} handlePageChange={handlePageChange}></PlayerSelection>

        {/* footer section */}
      </div>
    </>
  )
}

export default App
