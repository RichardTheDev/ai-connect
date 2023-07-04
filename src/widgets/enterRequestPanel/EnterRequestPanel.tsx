import { GenerateButton, SelectElement, TextArea } from "shared/UIKit";
import "./EnterRequestPanel.scss";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";

interface EnterRequestPanelProps {
  onGenerateButtonClick: (index: number) => void;
}

export const EnterRequestPanel: React.FC<EnterRequestPanelProps> = ({
  onGenerateButtonClick,
}) => {
  const index: number = useAppSelector((state) => state.dataType.value);

  return (
    <div className="enter-request-panel">
      <h1 className="title-panel">
        <span>AI</span> Connection
      </h1>
      <div className="body-panel">
        <div className="upper-part">
          <p>I want to see a </p>
          <SelectElement />
          <p>of</p>
        </div>
        <TextArea placeholder="type here what you want to see " />
        <GenerateButton onClick={() => onGenerateButtonClick(index)} />
      </div>
    </div>
  );
};
