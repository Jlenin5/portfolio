import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const Routess: React.FC = () => {
  return (
    <Router>
      <div className="ctn-portfolio">
        <Sidebar />
        <div className="right">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default Routess