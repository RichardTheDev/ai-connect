import { EnterRequestPanel, GenericList, ResultPanel } from "widgets";
import "./MainPage.scss";
import GenericPlot from "widgets/genericPlot/GenericPlot";
import Plotly from "plotly.js";

export const MainPage = () => {
  return (
    <div className="main-page">
      <EnterRequestPanel />

      <ResultPanel
        title="Here is the top 100 best sellers of the week :"
        isGraph={false}
      />
    </div>
  );
};
