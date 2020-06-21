import React from 'react';
import './App.css';
import Header from './component/Header';
import Balance from './component/Balance';
import TransactionHistory from './component/TransactionHistory';
import AddTransaction from './component/AddTranaction';
import AccountSummary from './component/AccountSummary';
//Global provider
import {GlobalProvider} from './context/GlobalState'


function App() {
  return (
  <>
    <GlobalProvider className="App">
      <Header />
      <Balance />
      <AccountSummary />
      <TransactionHistory />
      <AddTransaction />
    </GlobalProvider>
    <footer>
      <p>
        Crafted with <span><img src="assets/heart.png" /></span>  by Rafay
      </p>
    </footer>
  </>
  );
}

export default App;
