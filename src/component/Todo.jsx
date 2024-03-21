import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addTodo ,deleteTodo,removeTodo } from '../action';
import "./Todo.css"

const Todo = () => {
    const [inputData, setInputData] =useState('');
        const dispatch = useDispatch();
  return (
    <>
        <div className='main-div'>
       <div className='child-div'>
        <figure>
          <figcaption>Add Your List </figcaption>
        </figure>
          <div className='addItem'>
              <input type="text" placeholder='Add item'
              value ={inputData }
              onChange={ (event)=> setInputData(event.target.value)}
              />
              <i onClick={()=> dispatch(addTodo(inputData))}>add</i>
          </div>
       </div>
      </div>

    </>
  )
}

export default Todo