import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"];

const tarefas2 = [<li>"Acordar"</li>,<li>"Tomar café"</li>, <li>"Escovar os dentes"</li>, <li>"Ir trabalhar"</li>];

// function App() {
//   return (<ul>{ tarefas.map(tarefa => task(tarefa)) }</ul>);
// }

function App() {
  return (<ul>{ tarefas.map(tarefa => task(tarefa)) }</ul>);
}

export default App;
