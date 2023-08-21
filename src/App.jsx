
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Product from './CRUD/Product'
import Add from './CRUD/Add'
import './App.css'
import Edit from './CRUD/Edit'
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='*'  element = {<Product/>}/>
      <Route path='/add'  element = {<Add/>}/>
      <Route path='/:id/update'  element = {<Edit/>}/>
      
      </Routes>
    </Router>
  )
}

export default App
