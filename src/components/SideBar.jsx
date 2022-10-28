import React, { useState } from "react";
import "../style/SideBar.scss";
import { GiHouse, GiFencer, GiMountainCave } from "react-icons/gi";

const SideBar = ({ clickedTab, setClickedTab }) => {
  const [toggle, SetToggle] = useState(false)

  return (
    <nav className="navbar">
      <div>FRAGO88</div>
      <ul className="nav">
        <li key="0" onClick={() => {SetToggle(false); setClickedTab(0);}}>
          <GiHouse/>
          Home
        </li>
        <li key="1" onClick={() => {SetToggle(false); setClickedTab(1);}}>
          <GiFencer/>About Me
        </li>
        <li key="2" onClick={() => {SetToggle(false); setClickedTab(2);}}>
          <GiMountainCave/>
          Portfolio
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
