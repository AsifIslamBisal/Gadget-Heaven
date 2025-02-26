import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './components/Nav';
import Statistics from './Statistics/Statistics'
import Dashboard from './Dashboard/Dashboard'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Root } from 'postcss';
import ErrorPage from './errorpage/ErrorPage';
import Details from './gadget/Details';
import MainPage from './components/MainRoot/MainPage';
import Card from './gadget/Card';
import Cards from './components/Cards';
import { ToastContainer } from 'react-toastify';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      
      {
        path: "",
        element:<Cards></Cards>,
       
      },
      
      {
        path: "Card/:product_id",
        element:<Details></Details>,
        loader: () => fetch('/product.json')
       
      },
      {
        path: "/Statistics",
        element:<Statistics></Statistics>,
       
      },
      {
        path: "/Dashboard",
        element:<Dashboard></Dashboard>,
        loader: () => fetch('/product.json')
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
   <ToastContainer />
  </StrictMode>,
)
