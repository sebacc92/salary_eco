import './App.css'
import {  useTokenBalance, useEtherBalance, useEthers } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'

const BNB = '0xB8c77482e45F1F44dE1745F52C74426C631bDD52'
const SLRM = '0x15ada4ea653e6e87b7f981c943965b20b2dcf703'
const SLR = '0x8619c4b2ecdcb716cd162ec73f332c4d7dc06f1e'

function App() {
  const { activateBrowserWallet, account, activate, deactivate } = useEthers()
  
  const bnbBalance = useEtherBalance(account)
  console.log('bnbBalance', bnbBalance)
  const slrmBalance = useTokenBalance(SLRM, account)
  console.log('slrmBalance', slrmBalance)
  const slrBalance = useTokenBalance(SLR, account)
  console.log('slrBalance', slrBalance)
  
  return (
    <div>
      {!account && <div>
        <button onClick={() => activateBrowserWallet()}>Connect wallet</button>
      </div>}
      {account && <button onClick={() => deactivate()}>Disconnect</button>}
      {account && <p><b>Account:</b> {account}</p>}
      {bnbBalance && (
        <div className="balance">
          <br />
          Balance BNB:
          <p className="bold">{formatEther(bnbBalance)}</p>
        </div>
      )}
      {slrmBalance && (
        <div className="balance">
          <br />
          Balance SLRM:
          <p className="bold">{formatEther(slrmBalance)}</p>
        </div>
      )}
      {slrBalance && (
        <div className="balance">
          <br />
          Balance SLR:
          <p className="bold">{formatEther(slrBalance)}</p>
        </div>
      )}
    </div>
  )
}

export default App
