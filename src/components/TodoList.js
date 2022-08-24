import React, {useEffect, useState} from 'react'
import CreateTask from '../modals/CreateTask'
import Card from './Card';

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() =>{
    let arr = localStorage.getItem('taskList')
    
  if(arr){
      let obj = JSON.parse(arr)
      setTaskList(obj)
    }
  }, [])

  const deleteTask = (index) =>{
    let tempList = taskList
    tempList.splice(index,1)
    localStorage.setItem('taskList', JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }

const updateListArray = (obj, index) =>{
  let tempList = taskList
  tempList[index] = obj
  localStorage.setItem('taskList', JSON.stringify(tempList))
  setTaskList(tempList)
  window.location.reload()
}

  const toggle = () => {
    setModal(!modal);
  }

  const saveTask = (taskObj) =>{
    let tempList = taskList
    tempList.push(taskObj)
    localStorage.setItem('taskList', JSON.stringify(tempList))
    setModal(false)
    setTaskList(taskList)
  }

  //Current Date
  const d = new Date()
  const weekDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'] 
  const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] 
  
  const day = weekDay[d.getDay()]
  const month = months[d.getMonth()]
  const date = d.getDate()
  const year = d.getFullYear()
  return (
    <>
    <div className='header text-center'>
      <h3>Todo List</h3>
      <button className='btn btn-primary mt-2' onClick={() => setModal(true)}>Create Task</button>
      <h2 className='whykay'>Hello Whykay</h2>
      <div className='main'>
        <div className='date'>
          <h1>{day}</h1>
          <h2>{date}</h2>
          <h2>{month}</h2>
          <h2>{year}</h2>
        </div>
      </div>
    </div>
    <div className='task-container'>
      {taskList.map((obj, index) => <Card taskObj = {obj} index={index} deleteTask = {deleteTask} updateListArray = {updateListArray}/>)}
    </div>
    <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
    </>
  )
}

export default TodoList