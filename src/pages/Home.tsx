import React, { useState } from "react";
import db from "../data/db.json";
import { Helmet } from "react-helmet";
import Gaside from "../Components/home/aside/Gaside";
import Gcontent from "../Components/home/content/Gcontent";

const Home = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="KRDS" />
      {/* 왼쪽 메뉴 영역 */}
      <Gaside />

    
      <Gcontent />
    </div>
  );
};

export default Home;
