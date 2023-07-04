import { GenericList } from "widgets";
import GenericPlot from "widgets/genericPlot/GenericPlot";
import "./ResultPanel.scss";
import Loader from "widgets/loader/Loader";
import { useAppSelector } from "../../services/hooks";

interface ResultPanelProps {
  data: string; // add this line
}
export interface ListResponse {
  columns: string[];
  rows: any[][];
  prompt: string;
}
export interface GraphResponse {
  fig: string;
  prompt: string;
}

export const ResultPanel: React.FC<ResultPanelProps> = ({ data }) => {
  const index: number = useAppSelector((state) => state.dataType.value);

  const responseStatus: number = useAppSelector(
    (state) => state.dataType.responseStatus
  );
  if (data === null || typeof data === "undefined") {
    return <div></div>;
  }

  if (responseStatus == 0) {
    // not loading show result

    const jsonObject = JSON.parse(data);
    if (jsonObject.error) {
      return (
        <div className="panel">
          <h2>{jsonObject.error}</h2>
        </div>
      );
    }
    if (jsonObject.fig) {
      const response: GraphResponse = {
        fig: jsonObject.fig,
        prompt: jsonObject.prompt,
      };
      return <GenericPlot fig={response.fig}></GenericPlot>;
    } else if (jsonObject.rows) {
      const response: ListResponse = {
        columns: jsonObject.columns,
        rows: jsonObject.rows,
        prompt: jsonObject.prompt,
      };

      return (
        <div className="panel">
          <h2>{response.prompt}</h2>
          <GenericList columns={response.columns} values={response.rows} />
        </div>
      );
    } else {
      return <div></div>;
    }
  } else if (responseStatus == 1)
    //loading
    return (
      <div className="panel">
        <Loader />
      </div>
    );
  else return <div> </div>;
};
