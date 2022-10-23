import { configureStore, createSlice } from "@reduxjs/toolkit";

const agendaSlice=createSlice({
name:"agenda",
initialState:[
    {id:1,description:"Drink water",isDone:false},
    {id:2,description:"Play sport",isDone:false},
    {id:3,description:"Eat vegetables",isDone:false},
  ],
  reducers :{

addTask:(state,action)=>{
var count=state.length;
const newTask={id:count+1,description:action.payload,isDone:false};
state.push(newTask);
    },
editTask:(state,action)=>{
      const newTask=state.find(y=>y.id===action.payload)
      newTask.isDone=! newTask.isDone;
          },

  }
})

export const store=configureStore({
reducer : {
agenda:agendaSlice.reducer
}
});