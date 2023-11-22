import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Erro404 from './routes/Error404.jsx'
import GlobalStyle from './assets/styles/EstiloGlobal.jsx'


// 1 - configurando o router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './routes/Login.jsx'
import Principal from './routes/Principal.jsx'



const router = createBrowserRouter([
  {path: "/", element: <App />, errorElement: <Erro404/>,
  children: [
    {path: "/", element: <Login/>},
    {path: "/solucao", element: <Principal/>}
  ]},
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);

