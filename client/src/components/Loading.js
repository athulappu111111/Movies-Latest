import React from "react";
import { Spinner } from "react-bootstrap";
import { WifiLoader } from "react-awesome-loaders";

const Loading = () => (
  <div className="loading">
    <WifiLoader
      background={"transparent"}
      desktopSize={"150px"}
      mobileSize={"150px"}
      text={"Loading"}
      backColor="#E8F2FC"
      frontColor="#4645F6"
    />
    {/* <Spinner animation="border" variant="primary" /> */}
  </div>
);

export default Loading;
