import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let victor = {
  name: "victor",
  age: 25,
  occupation: "developer"
}

// local storage is saved as JSON and retrieved as JSON
localStorage.setItem("victor", JSON.stringify(victor));
const user = JSON.parse(localStorage.getItem("victor"));

console.log(user.name);
const numbers = [
  { id: "A", value: 1 },
  { id: "B", value: 2 },
  { id: "C", value: 3 },
  { id: "D", value: 4 },
  { id: "E", value: 5 },
  { id: "F", value: 6 },
  { id: "G", value: 7 },
  { id: "H", value: 8 },
  { id: "I", value: 9 }
];

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

//ReactDOM.render(element, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
