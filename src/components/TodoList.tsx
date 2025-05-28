import React from "react";
import "../output.css";
import { Todo } from "../model";
interface Props {
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
};
const TodoList : React.FC<Props> = ({todos, setTodos})=>{
    return (
        <div className="flex flex-row gap-1 mx-10 mb-5">
            <div className="todos relative text-gray-300 bg-gray-900 flex flex-col w-1/2 mt-10 items-center py-3 px-2 rounded-md max-w-1/3">
                <header className="top-0 absolute font-medium text-xl bg-pink-800 p-2 rounded-sm w-full text-center">Ongoing</header>   
                <div className="mt-13 mb-5 flex flex-col gap-5 ">
                    {todos.map(todo=>(
                    <li className="hover:text-gray-100 w-full hover:bg-gray-600 text-lg font-medium font-sans">{todo.todo}</li>    
                ))}
                </div>
            </div>
            <div className="mx-10 todos relative text-gray-300 bg-gray-900 flex flex-col w-1/2 m-10 items-center py-3 px-2 rounded-md max-w-1/3 mt-10">
                <header className="top-0 absolute font-medium text-xl bg-yellow-600 p-2 rounded-sm w-full text-center">Assigned</header>   
                <div className="mt-13 mb-5 flex flex-col gap-5 ">
                    
                </div>
            </div>
             <div className="mx-10 todos relative text-gray-300 bg-gray-900 flex flex-col w-1/2 m-10 items-center py-3 px-2 rounded-md max-w-1/3 mt-10">
                <header className="top-0 absolute font-medium text-xl bg-green-600 p-2 rounded-sm w-full text-center">Completed</header>   
                <div className="mt-13 mb-5 flex flex-col gap-5 ">
                   
                </div>
            </div>
        </div>
    );
};

export default TodoList;