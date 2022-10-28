import React from "react";
import "../style/Portfolio.scss";
import { data } from "../data";
import PortCard from "./PortCard";

const Portfolio = () => {
  console.log(data);

  return (
    <div className="portContainer">
      {data.map((el) => {
        return <PortCard key={el.id} el={el}/>;
      })}
    </div>
  );
};

export default Portfolio;
