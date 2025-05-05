import { Routes, Route } from 'react-router-dom';
import Index from '../Pages/Index/Index';
import Home from '../Pages/Home/Home';
import Disciplinas from '../Pages/Disciplinas/Disciplinas';
import Boletim from '../Pages/Boletim/boletim';
import Jogo from '../Pages/Jogo/jogo';
import Layout from '../components/Layout/layout';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/home" element={<Layout><Home /></Layout>} />
      <Route path="/disciplinas" element={<Layout><Disciplinas /></Layout>} />
      <Route path="/boletim" element={<Layout><Boletim /></Layout>} />
      <Route path="/jogo" element={<Layout><Jogo /></Layout>} />
    </Routes>
  );
}