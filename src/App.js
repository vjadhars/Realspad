
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import Home_page from './Components/Home_page/Home_page';
import AboutPage from './Components/About/About';
import StoryPage from './Components/OurStory/Story';
import { Route, Routes } from 'react-router-dom';
import Smart_token_staking from './Components/Smart_token_staking/Smart_token_staking';
import Airdrops from './Components/AirDrops/AirDrops';

function App() {
  const [raise, setRaise] = useState(0)
  return (
    <div className="App">
      <Toaster />
      <Header />
      <Routes>
        <Route path='/' element={<Home_page />} />
        {/* <Route path='/contact_us' element={<Contact_page />} /> */}
        {/* <Route path='/About' element={<AboutPage />} /> */}
        {/* <Route path='/OurStory' element={<StoryPage />} /> */}
        <Route path='/Earn-rewards-staking' element={<Smart_token_staking />} />
        <Route path='/Earn-free-reals-tokens-airdrops' element={<Airdrops />} />

      </Routes>


      <Footer />

    </div>
  );
}

export default App;
