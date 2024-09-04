import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './index.css';
import Home from './views/Home/Home';
import Add from './views/Add/Add';
import Show from './views/Show/Show';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/add",
      element:<Add/>
    },
    {
      path:"/Show",
      element:<Show/>
    },
    {
      path:"*",
      element:<h1>404</h1>
    }
])

root.render(
        <div>
          < RouterProvider router={router} />
          <Toaster/>
        </div>
);

