import React from "react";
import { useParams } from "react-router-dom";

const accountUser = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>This is account for params: {id}</h1>
    </div>
  );
};

export default accountUser;
