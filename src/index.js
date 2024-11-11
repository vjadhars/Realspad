import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { bsc } from 'viem/chains'
import { BrowserRouter } from 'react-router-dom';

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'ac09aec8ba932273ba8fcffbf74619e7' //Realspad presale staking

// 2. Create wagmiConfig
const metadata = {
  name: 'Realspad Presale',
  description: 'Realspad Presale',
  url: 'https://Realspad.io',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [bsc]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <WagmiConfig config={wagmiConfig}>
      <App />
    </WagmiConfig>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
