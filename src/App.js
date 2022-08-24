import TodoList from './components/TodoList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

//   const d = new Date()
// const weekDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'] 
// const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] 

// const day = weekDay[d.getDay()]
// const month = months[d.getMonth()]
// const date = d.getDate()
// const year = d.getFullYear()
  return (
    <>
      <div className="App">
        <TodoList/>
      </div>
      {/* <div className='main text-center'>
        <div className='date'>
          <h1>{day}</h1>
          <h2>{date}</h2>
          <h2>{month}</h2>
          <h2>{year}</h2>
        </div>
      </div> */}
    </>   
  );
}

export default App;
