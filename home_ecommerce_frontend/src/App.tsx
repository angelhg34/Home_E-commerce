import { Fragment } from 'react/jsx-runtime'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import HomeProducts from './pages/HomeProducts'
function App() {

  return (
      <Fragment>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/homeProduct' element={<HomeProducts/>}/>
          </Routes>
        </Router>
      </Fragment>

  )
}

export default App
