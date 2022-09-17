import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      return (response.json())
    })
    .then((json) => {
      setData(json)
      setLoading(false)
    })
  }, [])

  return(
    <div>
      {loading ? (
      <div>
        loading...
      </div>
      ) : (data.map((item) => {
        return (
          <div key={item.id} className="blockquote">
            <p>{item.id} {item.title}
            <input type="checkbox" defaultChecked={item.completed} className='check'></input>
            </p>
          </div>
        )
      }))}
    </div>
  )
}

export default App;
