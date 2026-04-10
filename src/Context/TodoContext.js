import { createContext,useContext } from "react";


export const TodoContext = createContext({
    todos :[
      {
        id:1,
        msg:"Todo msg",
        completed :false
      }
    ],

    addTodo:(todo)=>{ },
    updateTodo:(id,msg)=>{ },
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const TodoProvider =  TodoContext.Provider

function useTodo(){
  return useContext(TodoContext)

}

export default useTodo