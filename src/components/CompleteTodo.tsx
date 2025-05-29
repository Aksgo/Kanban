import React from "react";
import "../output.css"
import { Todo } from "../model";
import { TiArrowBackOutline } from "react-icons/ti";
import { IoMdDoneAll } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
interface Props {
    todo : Todo;
    todos :Todo[];
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>;
}

const CompleteTodo = ({todo, todos, setTodos}:Props)=>{

    const handleDelete = (id:number)=>{
        setTodos(
            todos.filter((todo)=>todo.id!=id)
        );
    };
    const handleRollback = (id:number)=>{
        setTodos(
            todos.map((todo)=>
            (
            todo.id==id?{...todo, isDone:!todo.isDone}:todo
            ))
        );
    };
    return (
        <div>
        {todo.isDone?
        (
        <div className="complete-todo raleway-f1 flex text-lg font-medium items-center justify-between text-gray-200 hover:bg-gray-800 px-4 py-4">
            <span className="todo-head w-2/3 break-words">{todo.todo}</span>
            <div className=" icons flex gap-2">
                <span className="icon p-1 border rounded-2xl text-blue-300 transition-transform active:scale-80" onClick={()=>{handleRollback(todo.id)}}>
                    <TiArrowBackOutline/>
                </span>
                <span className="icon p-1 border rounded-2xl text-red-500 transition-transform active:scale-80 " onClick={()=>handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
            </div>
        </div>
        ):null
        }
    </div>
    )
};

export default CompleteTodo