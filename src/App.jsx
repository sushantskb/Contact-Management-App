import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ContactForm from './components/ContactForm'
import ContactsList from './components/ContactsList'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={
            <div style={{marginTop: "50px"}}>
              <h1 className="text-2xl font-bold mb-4">Contacts</h1>
              <ContactForm />
              <ContactsList />
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
