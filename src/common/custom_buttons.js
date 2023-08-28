import "../common/custom_buttons.css";

export function MyButton({ buttonTitle, onClick }) {
  return (
    <button className="login-button" onClick={onClick}>
      {buttonTitle}
    </button>
  );
}
