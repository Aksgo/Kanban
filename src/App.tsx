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
    <div className="App w-full h-full">
      <header className="App-header mx-30 rounded-b-3xl bg-gray-900 text-white wdxl-lubrifont-tc-regular text-7xl text-center py-30">
        Kanban
      </header>
      <InputField todo = {todo} setTodo = {setTodo} handleAdd={handleAdd} />
      <TodoList todos = {todos} setTodos={setTodos}/>
      <Footer/>
    </div>
  );
}

export default App;
