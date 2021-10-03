import './App.css';
import {useState, useEffect} from 'react';

function App() {
  var today = new Date(),
  newDate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

  const [search, setSearch] = useState('')
  const [todoItems, setTodoItems] = useState([])
  const [date, setDate] = useState(newDate)

  

const handleSubmit = (e) => {
  e.preventDefault()
  setSearch('')
  setTodoItems([...todoItems, {id : search, value : search}])
}


const handleInput = (e) => {
  setSearch(e.target.value)
}

function closeBtn(id) {
  const list = [...todoItems]
  const updatedList = todoItems.filter(item => id !== item.id)
  setTodoItems([...updatedList])
}





  return (
    <div className="Wrapper">
      <form action="#" onSubmit={search ? handleSubmit : null}>
        <input 
            type="text" 
            placeholder="Type Item" 
            value={search}
            onChange={handleInput} 
            />
        <button>+</button>
      </form>

      <div className="lists-container">
        <div className="date">{date}</div>
        <ol>
            {todoItems.map((item, index) => (
              <li 
              key={item.id}
              >
              {index}. {item.value}
              <button className="close-btn" onClick={() => closeBtn(item.id)}>x</button>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
