import React from "react";
import "./App.css"

const App = () => {
  const arrElement = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="mainblock">
      {arrElement.map((item,index) => (
        <div key={index} id="box">{item}</div>
      ))}
    </div>
  );
};

export default App;
