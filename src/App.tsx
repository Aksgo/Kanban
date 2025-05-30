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
  };

  return (
   <div className="App relative w-full min-h-screen overflow-hidden bg-gray-950">
 <div
  style={{
    position: "fixed",
    top: "-85%",
    left: "-10%",
    width: "1000px",
    height: "1000px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 1%, rgba(168, 85, 247, 0.1) 1%, transparent 80%)",
    filter: "blur(150px)",
    pointerEvents: "none",
    zIndex:1
  }}
/>

  <div className='flex flex-col m-auto '>
  <header className="App-header rounded-b-3xl text-gray-100 wdxl-lubrifont-tc-regular text-[90px] text-center pt-20 pb-3 relative">
    Kanban
  </header>
    <span className="app-des rounded-b-3xl text-gray-200 raleway-f1 text-[30px] text-center ">
    Manage. Assign. Grow.
  </span>
  </div>
    
  <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
  <TodoList todos={todos} setTodos={setTodos} />
  <Footer />
</div>

  );
}

export default App;
