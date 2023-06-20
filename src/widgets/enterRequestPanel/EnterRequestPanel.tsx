import { GenerateButton, SelectElement, TextArea } from "shared/UIKit"
import "./EnterRequestPanel.scss"

export const EnterRequestPanel = () => {

    return (
        <div className="enter-request-panel">
            <h1 className="title-panel"><span>AI</span> Connection</h1>
            <div className="body-panel">
                <div className="upper-part">
                    <p>I want to see a </p>
                    <SelectElement/>
                    <p>of</p>
                </div>
                <TextArea/>
                <GenerateButton/>
            </div>
        </div>
    )
}