import './App.css';
import {useState} from 'react'
import Data from './utils/Data'
import SearchAppBar from './components/AppBar'

function App() {
  const [data, setData] = useState(Data)
  console.log(data)
  return (
    <div>
      <SearchAppBar />
      <h1>App yo!</h1>
    </div>
  );
}

export default App;
