import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Boilerplate from './pages/Boilerplate';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import WorkingTogether from './pages/WorkingTogether';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Boilerplate />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="workingtogether" element={<WorkingTogether />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
