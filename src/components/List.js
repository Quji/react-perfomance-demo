import React, {useState, useCallback, useRef} from "react";
import Dummy from "./Dummy";
import {log} from "../helpers";
import Status from "./Status";
import ListItem from "./ListItem";

const initData = [...new Array(5)].map((_, idx) => idx);

function List({ count }) {
  const [data, setData] = useState(initData);
  const countRef = useRef(count);
  countRef.current = count;
  const onClick = useCallback((count) => {
    alert('Click ' + countRef.current);

    data.splice(2, 0, data.length + 100);
    setData([...data]);
  }, []);

  log('List');
  return (
    <div>
      <hr />
      {count}
      <Dummy />
      <div style={{display: 'flex'}}>
        {data.map((value, idx) => (
          <ListItem key={value} value={value} onClick={onClick} />
        ))}
      </div>
      <Status />
    </div>
  );
}

export default List;
