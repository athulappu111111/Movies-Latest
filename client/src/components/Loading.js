import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => (
  <div className="loading">
    <Spinner animation="border" variant="info" />
  </div>
);

export default Loading;
