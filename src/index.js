import React from "react";
import ReactDOM from "react-dom";

const Heading = ({text}) => {
  return (
    <h1>{text}</h1>
  );
};


const App = () => {
  return (
    <div>
      <Heading text="hi theere"/>
      Hello!
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));