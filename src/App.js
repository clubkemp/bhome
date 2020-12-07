import './App.css';
import {useState} from 'react'
import Card from './components/Card'
import Data from './utils/Data'

function App() {
  const [data, setData] = useState(Data)
  console.log(data)
  return (
    <div>
      <Card />
      <h1>App yo!</h1>
    </div>
  );
}

export default App;
