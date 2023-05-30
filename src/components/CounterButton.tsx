import React from 'react';

interface Props {
  id: string;
  num: number;
}
export default function CounterButton(props: Props) {
  const { id, num } = props;

  const CounterButtonStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "30px",
    height: "30px",
    backgroundColor: "#E14139",
    color: "#ffffff",
    borderRadius: "1000px",
  }

  return (
    <div style={CounterButtonStyle}  id={id}>
      {num}
    </div>
  );
}
