import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home, About, Projects, Contact } from './pages'

const base = import.meta.env.VITE_BASE_URL;

const App = () => {
  return (
    <main className="bg-slate-300/20">
        <Router>
            <Navbar baseurl={base}/>
            <Routes>
                <Route path={`${base}`} element={<Home />} />
                <Route path={`${base}about`} element={<About />} />
                <Route path={`${base}projects`} element={<Projects />} />
                <Route path={`${base}contact`} element={<Contact />} />
            </Routes>
        </Router>
    </main>
  )
}

export default App