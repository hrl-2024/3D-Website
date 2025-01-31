import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home, About, Projects, Contact } from './pages'

const base = import.meta.env.VITE_BASE_URL;

const App = () => {
  return (
    <main className="bg-slate-300/20">
        <Router basename={base}>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </Router>
    </main>
  )
}

export default App