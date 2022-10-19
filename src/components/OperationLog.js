import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";

const OperationLog = ({index}) => {
  const { state } = useContext(AppContext);
  return (
    <tr>
      <td>{state.operationLogs[index].description}</td>
      <td>{state.operationLogs[index].operatedAt}</td>
    </tr>
  );
};

export default OperationLog;
