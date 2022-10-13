import { Routes, Route} from 'react-router-dom'


//importing pages
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import CreatePost from './pages/CreatePost'

//protected route
import LoginRequired from './components/ProtectedRoute'




function App() {
  return (
<Routes>
  <Route index element={<Home />} />
  <Route path='signup' element={<Signup />} />
  <Route path='signin' element={<Signin />} />
  <Route path='create-post' element={<LoginRequired />}>
  <Route index element={<CreatePost />} />
  </Route>
</Routes>
  );
}

export default App;
