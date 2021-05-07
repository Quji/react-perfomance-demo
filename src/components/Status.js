import React from "react";
import { log } from '../helpers';
import {useSelector} from "react-redux";

function Status() {
  const status = useSelector((state) => state.counter.status);
  log('Status');
  return (
    <div>{status}</div>
  );
}

export default React.memo(Status);
