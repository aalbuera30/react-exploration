import "../common/circular_custom_button.css";

export function CircularButton({ onClick }) {
  return <button className="button" onClick={onClick}></button>;
}
