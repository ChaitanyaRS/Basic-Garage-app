import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import AllCars from './pages/AllCars/AllCars.jsx'
import Login from './pages/Login/Login.jsx'
import Home from './pages/Home/Home.jsx'
import AddCar from './pages/AddCar/AddCar.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/allcars",
      element: <AllCars />
    },
    {
      path:"/addcar",
      element:<AddCar/>  
    }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)
