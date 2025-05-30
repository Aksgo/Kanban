import React from "react";
import "../output.css";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import CompleteTodo from "./CompleteTodo";
import { SiTicktick } from "react-icons/si";
interface Props {
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
};
const TodoList : React.FC<Props> = ({todos, setTodos})=>{
    return (
        <div className="todos-board flex m-10 justify-center">
            <div className=" todos flex-1 relative text-gray-300 bg-[#131318] shadow-2xl flex flex-col m-10 items-center rounded-md max-w-1/3 pb-2">
                <header className="top-0 absolute font-medium text-xl bg-pink-800 p-2 rounded-sm w-full text-center">Assigned</header> 
                <div className="mt-11 flex flex-col w-full h-90 overflow-y-auto">
                {   todos.filter((todo)=>(todo.isDone===false)).length>0?
                    todos.map(todo => (
                        <SingleTodo
                        todo = {todo}   
                        todos = {todos}
                        setTodos = {setTodos}
                        />
                    )):(<span className="text-center mt-45 text-gray-400 text-2xl flex gap-3 items-center justify-center">No Tasks<SiTicktick/></span>)
                }
                </div>  
            </div>

            <div className=" todos flex-1 relative text-gray-300 bg-[#131318] shadow-2xl flex flex-col m-10 items-center rounded-md max-w-1/3 pb-2">
                <header className="top-0 absolute font-medium text-xl bg-green-700 p-2 rounded-sm w-full text-center">Completed</header> 
                <div className="mt-11 flex flex-col w-full h-90 overflow-y-auto">
                {   todos.filter((todo)=>(todo.isDone===true)).length>0?
                    todos.map(todo => (
                        <CompleteTodo
                        todo = {todo}
                        todos = {todos}
                        setTodos = {setTodos}
                        />
                    )):(<span className="text-center mt-45 text-gray-400 text-2xl flex gap-3 items-center justify-center">Nothing to Show ...<SiTicktick/></span>)
                }
                </div>  
            </div>
        </div>
    );
};

export default TodoList;

/* <div className="todos relative text-gray-300 bg-gray-800 flex flex-col w-1/2 m-10 items-center py-3 px-2 rounded-md max-w-1/3">
                <header className="top-0 absolute font-medium text-xl bg-pink-800 p-2 rounded-sm w-full text-center">Ongoing</header>   
                <div className="mt-13 mb-5 flex flex-col gap-5 ">
                    {todos.map(todo=>(
                    <li className="hover:text-gray-100 w-full hover:bg-gray-600 text-lg font-medium font-sans">{todo.todo}</li>    
                ))}
                </div>
            </div>
            <div className="mx-10 todos relative text-gray-300 bg-gray-800 flex flex-col w-1/2 m-10 items-center py-3 px-2 rounded-md max-w-1/3 mt-10">
                <header className="top-0 absolute font-medium text-xl bg-yellow-600 p-2 rounded-sm w-full text-center">Assigned</header>   
                <div className="mt-13 mb-5 flex flex-col gap-5 ">
                    
                </div>
            </div>
             <div className="mx-10 todos relative text-gray-300 bg-gray-800 flex flex-col w-1/2 m-10 items-center py-3 px-2 rounded-md max-w-1/3 mt-10">
                <header className="top-0 absolute font-medium text-xl bg-green-600 p-2 rounded-sm w-full text-center">Completed</header>   
                <div className="mt-13 mb-5 flex flex-col gap-5 ">
                   
                </div>
            </div> */