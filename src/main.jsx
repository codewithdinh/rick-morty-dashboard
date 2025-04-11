import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SideBar from './routes/SideBar.jsx'
import About from './routes/About.jsx'
import NotFound from './routes/NotFound.jsx'
import ViewDetails from './routes/ViewDetails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<SideBar />}>
          <Route index={true} element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="characters/:id" element={<ViewDetails />} />
          <Route path="*" element={<NotFound />} />
          {/* Add more routes here as needed */}
        </Route>

      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
