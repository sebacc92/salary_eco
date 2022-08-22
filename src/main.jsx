import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { Mainnet, DAppProvider, DEFAULT_SUPPORTED_CHAINS, } from '@usedapp/core'
import { CustomChain } from './custom-chain'
import { getDefaultProvider } from 'ethers'

const config = {
  readOnlyChainId: CustomChain.chainId,
  readOnlyUrls: {
    [CustomChain.chainId]: 'https://bsc-dataseed.binance.org',
  },
  networks: [...DEFAULT_SUPPORTED_CHAINS, CustomChain],
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>
)
