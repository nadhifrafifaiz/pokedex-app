import React from "react";
import { useParams } from "react-router";

const Detail = () => {
  const { name } = useParams();
  return <div>Detail {name}</div>;
};

export default Detail;
