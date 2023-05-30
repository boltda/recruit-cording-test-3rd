import React from 'react';

interface Props {
  id: string;
  title: string;
  price: number;
  onClick: () =>void;
}
export default function DrinkButton(props: Props) {
  const { id, title, price, onClick } = props;

  const trackButtonStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "200px",
    fontSize: "20px",
    border: "2px solid #000000",
    backgroundColor: "#ffffff",
    color: "#000000",
    // 影をつける
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)",

    padding: "8px 20px",
    cursor: "pointer",
    borderRadius: "8px",
  }

  return (
    <button style={trackButtonStyle} id={id} onClick={onClick}>
      <div>
        {title}
      </div>
      <div>
        {price}円
      </div>
    </button>
  );
}
