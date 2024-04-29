import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import AuthProvider from './components/AuthProvider';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import AddCraftItem from './components/AddCraftItem';
import MyArt_and_CraftList from './components/MyArt_and_CraftList';
import All_Art_and_Craft_Item from './components/allArtAndCraftItem/All_Art_and_Craft_Item';
import ViewDetails from './components/ViewDetails';
import Update from './components/Update';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/allArtandCraft',
        element: <All_Art_and_Craft_Item></All_Art_and_Craft_Item>,
      },
      {
        path: '/addItem',
        element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>,
      },
      {
        path: '/myArt',
        element: <PrivateRoute><MyArt_and_CraftList></MyArt_and_CraftList></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/craftItems')
      },
      {
        path: "/details/:_id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/craftItems')
      },
      {
        path:'/update/:_id',
        element:<Update></Update>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
