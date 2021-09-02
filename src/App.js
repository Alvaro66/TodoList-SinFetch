import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState,} from 'react';
import Form from './Componentes/Form.js';
import TodoList from './Componentes/Todo.js';



function App() {
  const [texto, setTexto] = useState("");
  const [tareas, setTareas] = useState([]);

  return (
    <div className="App">
    <div className="app-container">
      <Form texto={texto} tareas={tareas} setTareas={setTareas} setTexto={setTexto}/>
      <TodoList setTareas={setTareas} tareas={tareas} />
      </div>
    </div>
  );
}

export default App;
