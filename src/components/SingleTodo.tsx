import React from "react";
import "../output.css"
import {AiFillEdit} from "react-icons/ai";
import { Todo } from "../model";

interface Props {
    todo : Todo;
    todos :Todo[];
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo,todos,setTodos}:Props)=>{
    return (
        <form className="todo_single">
            <span className="text-white">{todo.todo}</span>
            <div>
                <span className="icon">
                    <AiFillEdit />
                </span>
            </div>
        </form>
    );
}
export default SingleTodo;