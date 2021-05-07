import React from "react";
import {log} from "../helpers";

const style = {
  padding: '5px',
  margin: '10px 5px',
  border: '1px solid #ccc',
};

function ListItem({ value, onClick }) {
  log('ListItem' + value);
  return (
    <div style={style}>
      <a href="#null" onClick={onClick}>{value}</a>
    </div>
  );
}

export default React.memo(ListItem);
