import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import ButtonComp from './components/common/Button'
import Login from './pages/Login'
import Home from './pages/Home'
import Rentals from './pages/Rentals'
import ProductPage from './components/products/ProductPage'
import ProfilePage from './components/profile/UserProfile'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-16"> {/* Add padding top to account for fixed header */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<div>Explore Page</div>} />
            <Route path="/rentals" element={<Rentals/>} />
            <Route path="/rentals/:id" element={<ProductPage />} />  
            {/* <Route path="/swapping" element={<div>Swapping Page</div>} /> */}
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
