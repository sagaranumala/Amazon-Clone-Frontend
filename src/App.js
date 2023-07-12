import Home from './Home'
import Header from './Header'
import Payment from './Payment';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from './Login';
import Checkout from './Checkout';
import Footer from './Footer';

//import MenuIcon from '@mui/icons-material/Menu';
function App() {
  
  return (
    <BrowserRouter>
    <div>
    <Header/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Routes>
      <Route path='/cart' element={<Checkout/>}/>
    </Routes>
    <Routes>
      <Route path='/payment' element={<Payment/>}/>
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
