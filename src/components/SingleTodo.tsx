import React, { useEffect, useReducer, useRef, useState } from "react";
import "../output.css"
import {AiFillEdit} from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";
import { Todo } from "../model";
import { IoSaveOutline } from "react-icons/io5";

interface Props {
    todo : Todo;
    todos :Todo[];
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo,todos,setTodos}:Props)=>{

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] =  useState<string>(todo.todo);
    const handleDone = (id:number)=>{
        setTodos(
            todos.map((todo)=>{
                if(todo.id===id){
                    return {...todo, isDone:!todo.isDone};
                }
                return todo;
            })
        );
    };
    const handleDelete = (id:number)=>{
        setTodos(
            todos.filter(todo=>todo.id!=id)
        );
    };
    const handleEdit = (e:React.FormEvent, id:number)=>{
        e.preventDefault();
        setTodos(
            todos.map((todo)=>{
                return todo.id===id?({...todo, todo:editTodo}):todo;
            })
        );
        setEdit(false);
    };

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(()=>{
        inputRef.current?.focus();
    },[edit]);

    return (
        <form 
        onSubmit={(e)=>{handleEdit(e,todo.id)}}
        className="todo_single raleway-f1 flex text-lg font-medium items-center justify-between text-gray-200 hover:bg-gray-800 px-4 py-4">
            {
                edit?(<input 
                    ref={inputRef}
                    className="bg-gray-600 p-2"
                    value={editTodo} 
                    onChange={(e)=>{setEditTodo(e.target.value)}}
                    />):
            ((()=>{
                    if(todo.isDone){
                        return <s className="todo-head w-2/3 text-gray-400 break-words">{todo.todo}</s>;
                    }else{
                    return <span className="todo-head w-2/3 break-words">{todo.todo}</span>;
                    }   
                })())
            }         
            <div className=" flex gap-2">
                    <span className="icon p-1 border rounded-2xl text-blue-300 transition-transform active:scale-80" onClick={
                        (e)=>{
                            if(!edit && !todo.isDone){setEdit(!edit);}
                            else if(edit && !todo.isDone){handleEdit(e,todo.id);}
                        }}>
                        {
                        edit?(<IoSaveOutline/>):(<AiFillEdit/>)
                        }
                </span>
                <span className="icon p-1 border rounded-2xl text-red-500 transition-transform active:scale-80 " onClick = {()=>{handleDelete(todo.id)}}>
                    <AiFillDelete />
                </span>
                <span className="icon p-1 border rounded-2xl text-green-300 transition-transform active:scale-80" onClick={()=>{handleDone(todo.id)}}>
                    <IoMdDoneAll />
                </span>
            </div>
        </form>
    );
}
export default SingleTodo;