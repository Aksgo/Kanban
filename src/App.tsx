import React, { useState } from 'react';
import './output.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';
import { useRef } from 'react';
import Footer from './components/Footer';
function App() {
  const [todo, setTodo] = useState<string>(""); // initialize the state value as empty string

  // initializing a todo model just like database model with id data status
  const [todos, setTodos] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = (e : React.FormEvent) => {
    e.preventDefault();
    if(todo){
      //adding new obejct to existing todo objects array
      setTodos([...todos,{id:Date.now(), todo:todo, isDone:false}]);
      setTodo("");
      inputRef.current?.blur();
    } 
    console.log(todos);
  };

  return (
   <div className="App relative w-full min-h-screen overflow-hidden bg-gray-950">
  <div
    style={{
      position: "absolute",
      top: "-70%",
      left: "1%",
      width: "1300px",
      height: "13 00px",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(250, 204, 21, 0.12) 0%, transparent 70%)",
      filter: "blur(100px)",
      pointerEvents: "none",
      zIndex: 0,
    }}
  />

  
  <header className="App-header rounded-b-3xl text-gray-200 wdxl-lubrifont-tc-regular text-7xl text-center py-30 relative z-10">
    Kanban
  </header>

  <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
  <TodoList todos={todos} setTodos={setTodos} />
  <Footer />
</div>

  );
}

export default App;
