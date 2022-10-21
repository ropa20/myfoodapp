import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/login'
import Signup from './components/signup'
import Home from './components/home'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import WishList from './components/wishList'
import EmptyPage from './components/empty'

const App = () => {
  return (
    <AuthContextProvider>
        <Routes>
            <Route path='/' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='/wishlistIsEmpty' element={<EmptyPage />} />
            <Route path='/home' element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute> 
            } />  
        </Routes>
    </AuthContextProvider>
  )
}

export default App