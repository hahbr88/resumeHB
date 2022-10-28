import React, { useState, useEffect } from "react";
import "../style/Layout.scss";
import SideBar from "./SideBar";
import Portfolio from "./Portfolio";
import { CSSTransition } from "react-transition-group";



const Layout = () => {
  const [clickedTab, setClickedTab] = useState(0);

  return (
    <div className="container">
      <SideBar clickedTab={clickedTab} setClickedTab={setClickedTab} />
      <section>
        {clickedTab === 0 && <h4>열정적인 개발자</h4>}
        {clickedTab === 1 && <h4>About ME</h4>}
        {clickedTab === 2 && <Portfolio/>}
        {/* <CSSTransition in={false} classNames="show" timeout={1000}>
          {clickedTab === 0 && <h4>열정적인 개발자</h4>}
        </CSSTransition>
        <CSSTransition in={false} classNames="show" timeout={1000}>
          {clickedTab === 1 && <h4>About ME</h4>}
        </CSSTransition>
        <CSSTransition in={false} classNames="show" timeout={1000}>
          {clickedTab === 2 && <h4>Portfolio</h4>}
        </CSSTransition> */}
      </section>
    </div>
  );
};


// function TabContent(props) {

//   useEffect(()=>{
//     props.setOnOff(true);
//   })

//   if (props.clickedTab === 0){
//     return (<div>상세정보 내용입니다.</div>)
//   } else if (props.clickedTab === 1) {
//     return (<div>리뷰 내용입니다.</div>)
//   } else if (props.clickedTab === 2) {
//     return (<div> 내용입니다.</div>)
//   }
// }

export default Layout;
