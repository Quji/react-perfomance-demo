import React, {useMemo} from "react";
import {log} from "../helpers";

function Dummy({ count }) {
  log('Dummy');
  const memo = useMemo(() => {
    for(let i=0; i < 1000000000; i++) {

    }
    return 123 * count;
  }, [count]);

  return (
    <div style={{display: 'none'}}>dummy {memo}</div>
  );
}

export default Dummy;
