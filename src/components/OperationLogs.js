import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";

import OperationLog from "./OperationLog";

const OperationLogs = () => {
  const { state } = useContext(AppContext);
  console.log(state.operationLogs);
  return (
    <>
      <h4>操作ログ一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map((operationLog, index) => (
            <OperationLog key={index} index={index}/>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default OperationLogs;
