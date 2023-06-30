import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers?quotes=krw")
    .then((response)=>response.json())
    .then((json)=>{
      setCoins(json);
      setLoading(false);
    }); 
  },[]);
  const onChange = (event) => setMoney(event.target.value);
  const onSubmit = () => {
    setMoney(0);
  };
   return (
    <div>
      {loading? <h1>Loading...</h1>: 
      <div>
        <h1> Coins!! ({loading? "" : coins.length})</h1>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="money"> 시드머니 : 
              <input id="money" type="number" onChange={onChange} value={money}></input>
            </label>
          </div>
          <select>
          {coins.map(item => <option>{item.name}({item.symbol}) price : {Math.round(item.quotes.KRW.price)} 원</option>)}
          </select>
        </form>
      </div>}
    </div>
  );
}

export default App;
//"https://api.coinpaprika.com/v1/tickers?quotes=krw"