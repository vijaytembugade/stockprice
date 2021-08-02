import './App.css';
import {useState} from 'react'

function App() {

  const [price, setPrice] = useState()
  const [qty, setQty]= useState()
  const [currentPrice, setCurrentPrice] = useState()
  const [output, setOutput] = useState()

  function priceHandler(e){
    // console.log(e.target.value)
    setPrice(e.target.value)
  }

  function handleCheck(){
    var totalPrice = price * qty;
    var currentTotalPrice = currentPrice * qty;

  
    var profit = currentTotalPrice-totalPrice;
    console.log(profit)

    let percetage = (profit/totalPrice)*100;
    console.log(percetage)

    if(profit > 0){
      setOutput(<h2>Congrates ! You made {profit} Rs profit. Total gain is {(percetage)} %</h2>)
    }else{
      setOutput(<h2>Awww ! You made {Math.abs(profit)} Rs loss. Total loss is {Math.abs(percetage)} %</h2>)
    }
  }

  // console.log(price)
  // console.log(qty, currentPrice)
  return (
    <div>
      <h3>Perchace Price</h3>
      <input onChange={priceHandler} type="number"></input><br/>
      <h3>Quantity of Stock</h3>
      <input onChange={(e)=>setQty(e.target.value)} type="number"></input><br/>
      <h3>Current Price </h3>
      <input onChange={(e)=>setCurrentPrice(e.target.value)} type="number"></input><br/>
      <button onClick={handleCheck}>Check</button>
      {output}
    </div>
  );
}

export default App;
