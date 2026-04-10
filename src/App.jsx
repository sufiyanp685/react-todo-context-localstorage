import { useEffect, useState } from "react";
import { TodoProvider } from "./Context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";



export default function App() {

  const[todos,setTodos] =useState([])
  console.log(todos)//is andar ek todo hoga jo ham add karega 
   
   

  const addTodo=(todo)=>{
    //yaha se ham ek todo set karenge ye todoform mai jo input hai uske add button ko click karte hi run hoga
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])

    

  }


  const updateTodo=(id,todo)=>{
    
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? todo:prevTodo)))
    

  

 
  }

   const deleteTodo=(id)=>{
     
    setTodos((prev)=>prev.filter((prevTodos)=>prevTodos.id !==id
        ))
      }

    const toggleComplete=(id)=>{
      //ye run tab hoga jab onChange run hoga CHECKBOX ka jab checked box checked tab hi hoga completed ki value true pe rahega jaise hi unchecked hoga to completed ki value false hogi
     
        setTodos((prev)=>prev.map((prevTodos)=> prevTodos.id===id ? {...prevTodos,completed : !prevTodos.completed}:prevTodos))
    }

    useEffect(()=>{
    const todos =  JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }

    },[])

    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}} >
    
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key ={todo.id} className="w-full">
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    
    </TodoProvider>
  )
}