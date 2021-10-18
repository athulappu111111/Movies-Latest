import React from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

function Date({ onok, clear }) {
  return (
    <DateRangePicker
      size="md"
      placeholder="Select Duration"
      onOk={onok}
      onClean={clear}
    />
  );
}

export default Date;
