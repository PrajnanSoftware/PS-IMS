import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './scssFiles/global.scss'
import MainLayout from './layouts/MainLayout';
import OrdersPage from './pages/OrdersPage';
import Stock from './components/Stock';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path='/orders' element={<OrdersPage />} />
      <Route path='/stock' element={<Stock />} />


    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App








