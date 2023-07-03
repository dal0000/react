import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  let itemPrice;

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?quotes=krw")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const moneyChange = (event) => {
    setMoney(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    itemPrice = event.target.querySelector("select").value;    
    showAmount();
  };
  const coinChange = (event) => {
    itemPrice = event.target.value;
    showAmount();
  };
  const showAmount = () => {
    console.log(`내가 살 수 있는 양은 ${(money / itemPrice).toFixed(3)}`); 
  };
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1> Coins!! ({coins.length})</h1>
          <form onSubmit={onSubmit}>
            <select onChange={coinChange}>
              {coins.map((item) => (
                <option value={item.quotes.KRW.price} key={item.id}>
                  {item.name}({item.symbol}) ￦ 
                  {Math.round(item.quotes.KRW.price).toLocaleString()} 원
                </option>
              ))}
            </select>
            <div>
              <label htmlFor="money">
                시드머니 : {" "}
                <input
                  id="money"
                  type="number"
                  value={money}
                  onChange={moneyChange}
                ></input> 
              </label>
            </div>
          </form>
          <hr />
          <h2>{money}내가 살 수 있는 양은 {isNaN((money / itemPrice).toFixed(3)) ? null:(money / itemPrice).toFixed(3)}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
//"https://api.coinpaprika.com/v1/tickers?quotes=krw"