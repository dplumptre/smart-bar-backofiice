import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import OrdersPage from './pages/OrdersPage';


const router = createBrowserRouter(
  createRoutesFromElements( 
  <Route path='/' element={<MainLayout/>} >
  <Route index element= {<HomePage/>} />
  <Route path='/orders' element= {<OrdersPage/>} />
  
  </Route>
  )
);



const App = () => {
  return <RouterProvider router={router} />
};

export default App
