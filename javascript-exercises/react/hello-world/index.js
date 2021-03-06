import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

// Functional Component
function Hello() {
  return <h1>Hello world.</h1>;
}

// Class Component
// class Hello extends React.Component {
//   render() {
//     return <h1>Hello world.</h1>;
//   }
// }

const el = <Hello />;
ReactDOM.render(el, document.getElementById("root"));
