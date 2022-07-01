import React from "react";
import "./App.css";

import {
  Footer,
  Blog,
  Possibilities,
  GPT3,
  Header,
  Features,
} from "./containers/container-export";
import {
  Article,
  Brand,
  CTA,
  Feature,
  Navbar,
} from "./components/component-exports";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <GPT3 />
      <Features />
      <Possibilities />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
