import "./button.css";

function Button({ text, handleClick }) {
  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
