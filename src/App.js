import "./App.css";
import { useEffect, useState } from "react";
import Welcome from "./Welcome";
import Footer from "./Footer";

function App() {
  const [price, setPrice] = useState();
  const [qty, setQty] = useState();
  const [currentPrice, setCurrentPrice] = useState();
  const [output, setOutput] = useState();
  const [background, setBackGround] = useState("https://i.gifer.com/7D7o.gif");

  function priceHandler(e) {
    // console.log(e.target.value)
    setPrice(e.target.value);
  }

  const myStyles = {
    backgroundImage: "url(" + background + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  useEffect(() => {
    fetch("https://zirra.p.rapidapi.com/v1/timeseries", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "4166e9b862mshe2783ddb960d6dep127a94jsnb949cc04dc69",
        "x-rapidapi-host": "zirra.p.rapidapi.com",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  function handleCheck() {
    if (price > 0 && qty > 0 && currentPrice) {
      var totalPrice = price * qty;
      var currentTotalPrice = currentPrice * qty;
      var profit = currentTotalPrice - totalPrice;
      console.log(profit);

      let percetage = (profit / totalPrice) * 100;
      console.log(percetage);

      if (profit > 0) {
        setBackGround("https://i.gifer.com/oNW.gif");
        setOutput(
          <h4>
            Congrates ! You made {profit} Rs profit. Total gain is {percetage}{" "}
            %. 😎😎{" "}
          </h4>
        );
      } else if (profit < 0) {
        setBackGround("https://i.gifer.com/XZ9.gif");
        setOutput(
          <h4>
            Awww ! You made {Math.abs(profit)} Rs loss. Total loss is{" "}
            {Math.abs(percetage)} %. 😢😢
          </h4>
        );
      } else if (profit === 0) {
        setOutput(<h4>You have done no profit no loss!!</h4>);
      }
    } else {
      setOutput(<h4>Invalid Input values</h4>);
    }
  }

  // console.log(price)
  // console.log(qty, currentPrice)
  return (
    <>
    <Welcome/>
    <div className="container" style={myStyles}>
      <h3>Perchase Price</h3>
      <input onChange={priceHandler} type="number"></input>
      <br />
      <h3>Quantity of Stock</h3>
      <input onChange={(e) => setQty(e.target.value)} type="number"></input>
      <br />
      <h3>Current Price </h3>
      <input
        onChange={(e) => setCurrentPrice(e.target.value)}
        type="number"
      ></input>
      <br />
      <button onClick={handleCheck}>Check</button>
      <p className="output">{output}</p>
    </div>
    <Footer/>
    </>
  );
}

export default App;
