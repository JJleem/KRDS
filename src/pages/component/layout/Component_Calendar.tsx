import React from "react";
import Gaside from "../../../Components/common/aside/Gaside";
import { Helmet } from "react-helmet";
import Gcontent_Calendar from "../../../Components/component/layout/calendar/Gcontent_Calendar";
const Component_Calendar = () => {
  return (
    <div id="g-container">
      <Helmet defaultTitle="달력 (Calendar) | 컴포넌트 - KRDS" />
      <Gaside />
      <Gcontent_Calendar />
    </div>
  );
};

export default Component_Calendar;
