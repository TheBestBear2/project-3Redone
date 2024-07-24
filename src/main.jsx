import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home';
import ContactList from './pages/ContactList'
import ToDoList from './pages/ToDoList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
      path: '',
      element: <Home />,
    },

    { path:'Contact-List', element: <ContactList />},
    { path: 'Todo-list', element: <ToDoList />},
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


