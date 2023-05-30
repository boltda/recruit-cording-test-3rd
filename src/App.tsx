import React, { useState } from 'react';
import ItemCard from './components/ItemCard';

function App() {
  const [coffeeNum, setCoffee] = useState<number>(0);
  const [teaNum, setTea] = useState<number>(0);
  const [milkNum, setMilk] = useState<number>(0);
  const [cokeNum, setCoke] = useState<number>(0);
  const [bearNum, setBear] = useState<number>(0);

  const ReceiptStyle: React.CSSProperties = {
    marginLeft: "100px",
    padding: "8px 20px",
    borderRadius: "8px",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)",
    fontSize: "24px",
  }

  return (
    <div style={{
      marginTop: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "400px",
      }}>
        <ItemCard itemId="coffee" counterId="coffee-count" title="コーヒー" price={480} num={coffeeNum} onClick={()=>setCoffee(coffeeNum+1)} />
        <ItemCard itemId="tea" counterId="tea-count" title="紅茶" price={280} num={teaNum} onClick={()=>setTea(teaNum+1)} />
        <ItemCard itemId="milk" counterId="milk-count" title="ミルク" price={180} num={milkNum} onClick={()=>setMilk(milkNum+1)} />
        <ItemCard itemId="coke" counterId="coke-count" title="コーラ" price={190} num={cokeNum} onClick={()=>setCoke(cokeNum+1)} />
        <ItemCard itemId="beer" counterId="beer-count" title="ビール" price={580} num={bearNum} onClick={()=>setBear(bearNum+1)} />
      </div>
      <div style={ReceiptStyle}>
        <div>
          お会計
        </div>
        <hr style={{
          margin: "8px 0",
        }} />
        <span id='count'>
          商品数: {coffeeNum+teaNum+milkNum+cokeNum+bearNum ||0}個
        </span>
        <span id='price'>
          合計金額: {coffeeNum*480+teaNum*280+milkNum*180+cokeNum*190+bearNum*580 || 0}円
        </span>
      </div>
    </div>
  );
}

export default App;
