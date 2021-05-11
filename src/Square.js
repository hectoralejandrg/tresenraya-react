const Square = ({ pos, value, handleOnClick, handleChange }) => {
  return (
    <button
      className="Square"
      onClick={() => handleOnClick(pos)}
      onMouseLeave={handleChange}
    >
      {value}
    </button>
  );
};
export default Square;
