import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'

function App() {
  const [coins, setCoins] = useState(0);

  const handleToAddCoin = () => {
    const newCoins = coins + 4000000;
    setCoins(newCoins);
  };

  return (
    <>
      <div className="sm:mx-4 md:mx-12 lg:mx-20">
        <Header coins={coins} handleToAddCoin={handleToAddCoin}></Header>
      </div>
    </>
  )
}

export default App
