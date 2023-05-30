import React from 'react';
import DrinkButton from './DrinkButton';
import CounterButton from './CounterButton';
interface Props {
    itemId: string;
    counterId: string;
    title: string;
    price: number;
    num: number;
    onClick:()=> void;
  }
export default function ItemCard(props: Props) {
const { itemId, counterId, title, price, num, onClick } = props;

  return (
    <div style={{
      textAlign: "center",
    }}>
        <div style={{
            width: "200px",
            position: "relative",
        }}>
            <DrinkButton id={itemId} title={title} price={price} onClick={onClick} />
            <div style={{
                position: "absolute",
                top: "-15px",
                right: "-15px",
            }}>
                <CounterButton id={counterId} num={num} />
            </div>
        </div>
    </div>
  );
}
