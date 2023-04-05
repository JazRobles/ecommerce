import Home from './componets/Home/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CartContent from './componets/CartContent/CartContent';
import DataProvider from './componets/Context/DataContext';

function App() {
  return (
    <DataProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/cart'element={<CartContent/>}/>
    </Routes>
    </BrowserRouter>
    </DataProvider>
  )
   
  
}

export default App;
