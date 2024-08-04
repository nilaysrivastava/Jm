import React from "react";
import Header from "./components/Header";
// import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Topbar from "./components/Topbar";

const App: React.FC = () => {
  return (
    <div>
      <Topbar />
      <Header />
      {/* <AboutUs /> */}
      <Landing />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
