import GenerateBtnIcon from "assets/images/icons/generate-button.svg";
import "./GenerateButton.scss";
interface GenerateButtonProps {
  onClick: () => void;
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({ onClick }) => {
  return (
    <button className="generate-button" onClick={onClick}>
      <img src={GenerateBtnIcon} alt="Generate Icon" />
      Generate
    </button>
  );
};
