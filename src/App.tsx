import React from "react";
import Home from "./pages/Home";
import Header from "./Components/common/Header/Header";
import HeaderTop from "./Components/common/Header-top/HeaderTop";
import Footer from "./Components/common/Footer/Footer";
function App() {
  return (
    <div id="g-wrap" className="main">
      <HeaderTop />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
