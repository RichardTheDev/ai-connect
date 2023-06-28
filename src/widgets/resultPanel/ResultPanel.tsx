import { EnterRequestPanel, GenericList } from "widgets";
import GenericPlot from "widgets/genericPlot/GenericPlot";
import Plotly from "plotly.js";
import "./ResultPanel.scss";
import React, { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import Loader from "widgets/loader/Loader";
import { generateList } from "../../services/api";

interface ResultPanelProps {
  title: string;
  isGraph: boolean;
}
interface ResponseMessage {
  columns: string[];
  values: any[][];
}

export const ResultPanel: React.FC<ResultPanelProps> = ({ title, isGraph }) => {
  const [responseMessage, setResponseMessage] =
    useState<ResponseMessage | null>(null);

  const data = {
    columns: ["Name", "Age", "Location", "test", "test"],
    values: [
      ["John Doe", 25, "New York", "test", "sss"],
      ["Jane Smith", 30, "London", "test", "sss"],
    ],
  };

  const convertedValues: string[][] = data.values.map((row) =>
    row.map((value) => String(value))
  );

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const hardcodedValue = {
        prompt: "show me all the different gender of music",
      };

      const result = await generateList(hardcodedValue);
      setResponseMessage(result);
    } catch (error) {
      // Handle error
    }
  };
  const formattedValues =
    responseMessage?.values.map((row) => row.map((value) => String(value))) ||
    [];

  return (
    <div className="panel">
      {/* <Loader /> */}
      <h2>{true ? title : "test"}</h2>
      <GenericList columns={data.columns} values={convertedValues} />
    </div>
  );
};
