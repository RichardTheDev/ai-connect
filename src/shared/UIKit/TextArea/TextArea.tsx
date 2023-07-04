import { ChangeEvent, useState } from "react";
import "./TextArea.scss";
import { useAppDispatch, useAppSelector } from "../../../services/hooks";
import { actions } from "../../../actions/slice";

interface TextAreaProps {
  placeholder?: string;
}

export function TextArea({ placeholder }: TextAreaProps) {
  //const [text, setText] = useState("");

  const text = useAppSelector((state) => state.dataType.text);
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    dispatch(actions.setPrompt(newText));
  };

  return (
    <textarea onChange={handleChange} value={text} placeholder={placeholder} />
  );
}
