import React from "react";
import db from "../data/db.json";

const Home = () => {
  console.log(db);
  return (
    <div>
      {db.main.map((db) => (
        <div key={db.id}>
          <img src={db.img} alt="d" />
          <div>{db.title}</div>
          <div>{db.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
