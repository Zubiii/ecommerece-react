import { Routes, Route} from 'react-router-dom'
import Nevigation from './components/NevigationBar/index'
import Home from './pages/home/index'
import SignIn from './pages/signin'

const  App = () => {

  const Shop = () => {
    return (
      <h1>I'm in the Shop!</h1>
    )
  }
  
  return (
    <Routes>
      <Route path='/' element={<Nevigation/>}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='signin' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
