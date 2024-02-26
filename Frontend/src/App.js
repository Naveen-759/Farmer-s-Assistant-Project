import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import CropList from './components/Croplist';
import Layout from './components/Layout';
import Disease from './components/Disease';
import Pesticide from './components/Pesticide';
import Fertilizer from './components/Fertilizer';
import NoPage from './components/NoPage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="croplist" element={<CropList />} />
        <Route path="fertilizers" element={<Fertilizer />} />
        <Route path="diseases" element={<Disease />} />
        <Route path="pesticides" element={<Pesticide />} />
        <Route path="*" element={<NoPage />} /> 
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
