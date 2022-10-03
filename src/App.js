
import { Routes, Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sign-in.component'

const Shop = () => {
  return (
    <div>
        <h1>This is shop</h1>
    </div>
  )
}
const Contact = () => {
  return (
    <div>
        <h1>This is Contact</h1>
    </div>
  )
}

const Cart = () => {
  return (
    <div>
        <h1>This is Cart</h1>
    </div>
  )
}



const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Route>
   </Routes>
  );
}

export default App;
