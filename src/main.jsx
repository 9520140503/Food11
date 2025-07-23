import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './store/store'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import AuthLayout from "./components/AuthLayout"
import Signup from './pages/Signup.jsx'
import New from './pages/New.jsx'
import All from './pages/All.jsx'
import View from './pages/View.jsx'
import Edit from "./pages/Edit.jsx"


const router = createBrowserRouter([
  {path: '/',
  element: <App/>,
  children: [ {
      path: '/',
      element: <Home/>
    },
    {
      path: '/login',
      element: <AuthLayout authentication = {false}>
        <Login/>
      </AuthLayout>
    },
    {
       path: '/signup',
      element: <AuthLayout authentication = {false}>
        <Signup/>
      </AuthLayout>
    },
    {
       path: '/create-recipe',
      element: <AuthLayout authentication = {true}>
        <New/>
      </AuthLayout>
    },
    {
       path: '/recipes',
      element: <AuthLayout authentication = {true}>
        <All/>
      </AuthLayout>
    },
    {
      path: '/view',
      element: <AuthLayout authentication= {true}>
        <View/>
      </AuthLayout>
    },
    {
      path:'/edit',
      element: <AuthLayout>
        <Edit/>
      </AuthLayout>
    }
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Provider store={store}>
          <RouterProvider router={router}/>
        </Provider>
  </StrictMode>,
)
