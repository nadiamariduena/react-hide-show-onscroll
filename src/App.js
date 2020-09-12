import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
        <Content />
      </div>
    </React.Fragment>
  );
}

export default App;
