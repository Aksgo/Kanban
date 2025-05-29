import React from 'react'
import "../output.css"
import { useRef } from 'react';
interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd : (e:React.FormEvent)=>void;
}
const InputField: React.FC<Props>= ({todo, setTodo, handleAdd}) =>{
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div>
        <form className="mt-6 input flex items-center relative m-auto w-xl transition-transform focus-within:scale-130 hover:scale-130"
        onSubmit={(e)=>{handleAdd(e)}}>
            <input ref={inputRef} type = "input" placeholder='Enter your task' className=' bg-gray-300 p-3 w-full rounded-4xl focus:bg-gray-200 border-2 hover:border-purple-500 focus:' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button className="btn-submit bg-gray-900 text-gray-300 absolute right-0 m-2 py-1 rounded-full  px-1.5 hover:bg-gray-800 transition-transform active:scale-80 focus:scale-110 font-mono">add</button>
        </form>
        </div>
    );
};

export default InputField