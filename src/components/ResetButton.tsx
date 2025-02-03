type ButtonProps = { onClick: () => void };

const ResetButton = ({ onClick }: ButtonProps) => {
  return <button onClick={onClick}>Reset to 0</button>;
};

export default ResetButton