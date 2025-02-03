type ButtonProps = { onClick: () => void };

const IncreaseButton = ({ onClick }: ButtonProps) => {
  return <button onClick={onClick}>+1</button>;
};

export default IncreaseButton;
