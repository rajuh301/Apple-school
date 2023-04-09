import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from './components/Layout/Main';
import Teachers from './components/Teachers/Teachers';
import Home from './components/Home/home';
import Exam from './components/Exam/Exam';
import Selected from './components/Selected/Selected';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/teachers',
        element: <Teachers></Teachers>,
        loader: () => fetch('teacherInfo.json')
      },

      {
        path: '/exam',
        element: <Exam></Exam>,
        loader: () => fetch('studentsInfo.json')
      },

      {
        path: '/selected',
        element: <Selected></Selected>
      }
    ]

  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
