import React from "react";
import db from "../../../../data/db.json";

const FigmaArea = () => {
  console.log(db.design[0].title);
  return (
    <div className="main-area figma-area">
      <div className="inner">
        {db.design.map((db) => (
          <>
            <h3 className="area-tit" key={db.id}>
              {db.title}
            </h3>
            <ul className="box-group-area">
              <li
                style={
                  {
                    ["&::before"]: { backgroundImage: `url("${db.img}")` },
                  } as React.CSSProperties
                }
              >
                <a href="/">
                  <p className="tit">
                    {db.desc}
                    <br />
                    {db.desc2}
                  </p>
                </a>
              </li>
            </ul>
          </>
        ))}
      </div>
    </div>
  );
};

export default FigmaArea;
