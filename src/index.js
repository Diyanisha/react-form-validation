import React from 'react';
import ReactDOM from "react-dom";
import FormComponent from "./Components/form-component";
import './index.css';


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const rootElement = document.getElementById("root");
ReactDOM.render(<FormComponent />, rootElement);