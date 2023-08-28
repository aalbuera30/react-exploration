import "./custom_text_input.css";
export function CustomTextInput({
  placeholder,
  input_type = "text",
  onChange,
}) {
  return (
    <input
      className="text-field"
      placeholder={placeholder}
      type={input_type}
      onChange={onChange}
    />
  );
}
