import { ChangeEvent, useState } from "react";
import "./TextArea.scss";

interface TextAreaProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
}

export function TextArea({ onTextChange, placeholder }: TextAreaProps) {
  const [text, setText] = useState("");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText);
    onTextChange(newText); // Call the callback function with the new text
  };

  const handleClick = () => {
    setText("");
  };

  return (
    <textarea
      onChange={handleChange}
      onClick={handleClick}
      value={text}
      placeholder={placeholder}
    />
  );
}
