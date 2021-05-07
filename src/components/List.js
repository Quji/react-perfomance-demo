import React, {useState} from "react";
import Dummy from "./Dummy";
import {log} from "../helpers";
import Status from "./Status";
import ListItem from "./ListItem";

const initData = [...new Array(5)].map((_, idx) => idx);

function List({ count }) {
  const [data, setData] = useState(initData);
  const onClick = () => {
    //alert('Click');
    data.push(data.length);
    setData(data);
  };

  log('List');
  return (
    <div>
      <hr />
      {count}
      <Dummy />
      <div style={{display: 'flex'}}>
        {data.map((value, idx) => (
          <ListItem key={idx} value={value} onClick={onClick} />
        ))}
      </div>
      <Status />
    </div>
  );
}

export default List;


















/**
data.splice(2, 0, data.length + 100);
 */
