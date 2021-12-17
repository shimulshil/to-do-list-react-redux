import React, {useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions/index';
import './Todo.css';

const Todo =() => {
    const [inputData, setInputData] = useState('');
    const list = useSelector((state) =>state.todoReducers.list);
    const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className='child-div'>
          <figure>
            <figcaption>Add your List Here</figcaption>
          </figure>
          <div className='addItems'>
                <input type="text" placeholder='Add Items....'  value = {inputData}
                    onChange = {(event) => setInputData(event.target.value)}>                   
                </input>
                <button className='add-btn add' onClick={() =>dispatch(addTodo(inputData), setInputData(''))}>Add</button>
                {/* <i className='fa fa-plus add-btn' title = "Add Item" onClick={() =>dispatch(addTodo(inputData), setInputData(''))}></i>           */}
            </div>

            <div className='showItems'>
              {
                list.map((elem)=>{
                  return (
                    <div className='eachItem' key ={elem.id}>
                      <h3>{elem.data}</h3>
                      <div className='todo-btn'>
                        {/* <i className='far fa-trash-alt add-btn' title = "Delete Item" onClick={() =>dispatch(deleteTodo(elem.id))}></i> */}
                        <button className='add-btn delete' onClick={() =>dispatch(deleteTodo(elem.id))}>Delete</button>
                      </div>        
                    </div>
                  )
                  
                })
              }
              
            </div>

            <div className='showItems'>
                <button className='btn remove_all' onClick={() =>dispatch(removeTodo())}>Remove All</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
