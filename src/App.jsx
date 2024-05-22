import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import ContactForm from './components/ContactForm'
import ContactsList from './components/ContactsList'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={
            <div>
              <h1 className="text-2xl font-bold mb-4" style={{marginTop: "40px"}}>Contacts</h1>
              <ContactForm />
              <ContactsList />
            </div>
          } />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
