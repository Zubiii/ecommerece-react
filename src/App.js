import { Routes, Route} from 'react-router-dom'
import Home from './pages/home/index'

const  App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
