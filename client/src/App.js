import { Routes, Route} from 'react-router-dom'


//importing pages
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import CreatePost from './pages/CreatePost'



function App() {
  return (
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/signup' element={<Signup />} />
  <Route path='/signin' element={<Signin />} />
  <Route path='/create-post' element={<CreatePost />} />
</Routes>
  );
}

export default App;
