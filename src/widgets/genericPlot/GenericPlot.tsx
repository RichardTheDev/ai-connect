import React, { useEffect, useRef } from "react";
import "./GenericPlot.scss";

interface PlotlyComponentProps {
  plotlyHTML: string;
}

const GenericPlot: React.FC<PlotlyComponentProps> = ({ plotlyHTML }) => {
  const plotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (plotRef.current) {
      plotRef.current.innerHTML = plotlyHTML;
    }
  }, [plotlyHTML]);

  return (
    <div>
      Test
      <div ref={plotRef} />
    </div>
  );
};

export default GenericPlot;
