import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
// import ContactPage from './pages/ContactPage';
// import AboutPage from './pages/AboutPage';
import NavBar from './components/User/NavBar/NavBar';
import HomePage from './pages/User/HomePage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
