import React from "react";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";

const App = () => {
  return (
    <div className="min-w-[375px] m-auto h-screen grid">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
};

export default App;
