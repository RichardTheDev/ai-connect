import React from "react";
import Plot from "react-plotly.js";
import { Config, Layout, Data } from "plotly.js";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import Loader from "widgets/loader/Loader";

interface PlotProps {
  fig: string;
}

interface PlotData {
  data: Data[];
  layout: Partial<Layout>;
  config: Partial<Config>;
}

const PlotComponent: React.FC<PlotProps> = (props) => {
  const plotData: PlotData = JSON.parse(props.fig);
  const responseStatus: number = useAppSelector(
    (state) => state.dataType.responseStatus
  );

  if (responseStatus == -1 || props.fig == "") return <div></div>;

  return (
    <div className="panel">
      <div style={{ height: "500px" }}>
        <Plot
          data={plotData.data}
          layout={{ ...plotData.layout, autosize: true }}
          config={plotData.config}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default PlotComponent;
