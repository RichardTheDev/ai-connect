import { GenerateButton, SelectElement, TextArea } from "shared/UIKit";
import "./EnterRequestPanel.scss";
import { useState } from "react";

export const EnterRequestPanel = () => {
  const [chosenOptionIndex, setChosenOptionIndex] = useState(0);
  const [textValue, setTextValue] = useState("");

  const handleOptionChange = (index: number) => {
    setChosenOptionIndex(index);
  };

  const handleTextChange = (text: string) => {
    setTextValue(text);
  };

  const handleButtonClick = () => {
    console.log("Button Clicked");
    console.log("Chosen Option Index:", chosenOptionIndex);
    console.log("Text Value:", textValue);
  };

  return (
    <div className="enter-request-panel">
      <h1 className="title-panel">
        <span>AI</span> Connection
      </h1>
      <div className="body-panel">
        <div className="upper-part">
          <p>I want to see a </p>
          <SelectElement onOptionChange={handleOptionChange} />
          <p>of</p>
        </div>
        <TextArea
          onTextChange={handleTextChange}
          placeholder="type here what you want to see "
        />
        <GenerateButton />
      </div>
    </div>
  );
};
