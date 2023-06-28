import React, { useEffect, useRef } from "react";
import "./Loader.scss";
import { ColorRing } from "react-loader-spinner";

const Loader: React.FC = ({}) => {
  return (
    <div className="loader-container">
      <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#73E6FF", "#F77B7B", "#f8b26a", "#73E6FF", "#5D47E8"]}
      />
    </div>
  );
};

export default Loader;
