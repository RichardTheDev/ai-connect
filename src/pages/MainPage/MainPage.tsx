import { EnterRequestPanel, GenericList, ResultPanel } from "widgets";
import "./MainPage.scss";
import GenericPlot from "widgets/genericPlot/GenericPlot";
import Plotly from "plotly.js";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { actions } from "../../actions/slice";
import { generateGraph, generateList } from "services/api";
import { NavBar } from "shared/UIKit/NavBar/NavBar";
import { Dashboard } from "pages/Dashboard/Dashboard";

interface MainPageProps {}

export const MainPage: React.FC<MainPageProps> = () => {
  const prompt: string = useAppSelector((state) => state.dataType.text);
  const [res, setRes] = useState<string>("");
  const [isMain, setIsMain] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const onNavClick = async () => {
    setIsMain(!isMain);
  };

  const handleGenerateButtonClick = async (index: number) => {
    dispatch(actions.setResponseStatus(1)); // display loader
    if (index == 0) {
      let a = await generateList({
        prompt: prompt,
      });

      setRes(JSON.stringify(a));
    } else {
      let a = await generateGraph({
        prompt: prompt,
      });
      setRes(JSON.stringify(a));
    }

    dispatch(actions.setResponseStatus(0)); // display result
  };

  return (
    <div className="main-page">
      <NavBar isMain={isMain} onNavClick={onNavClick} />

      {isMain ? (
        <>
          <EnterRequestPanel
            onGenerateButtonClick={handleGenerateButtonClick}
          />
          <ResultPanel data={res} />
        </>
      ) : (
        <Dashboard />
      )}
    </div>
  );
};
