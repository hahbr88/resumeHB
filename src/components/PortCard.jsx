import React from "react";

const PortCard = ({ el }) => {
  return (
    <div className="card">
      <div className="title">{el.title}</div>
      <div className="descript">{el.descript}</div>
      <div className="thumbnail">
        <img src={el.thumbnail} alt="thumbnail" />
      </div>
      <div className="stack">
        {el.stack.map((badge)=>{
          return(
            <img className="badge" src={badge} alt="badge"/>
          )
        })}
      </div>
      <div className="projUrl">
        <a href={el.projUrl} target="_blank">프로젝트 보러가기</a>
      </div>
      <div className="github">
        <a href={el.github} target="_blank">Git Hub</a>
      </div>
    </div>
  );
};

export default PortCard;
