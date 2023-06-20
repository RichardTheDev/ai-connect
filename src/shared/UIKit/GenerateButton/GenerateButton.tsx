import GenerateBtnIcon from "assets/images/icons/generate-button.svg";
import "./GenerateButton.scss";

export function GenerateButton(){
    return (
        <button className="generate-button">
            <img src={GenerateBtnIcon} alt="Generate Icon"/>
            Generate
        </button>
    )
}