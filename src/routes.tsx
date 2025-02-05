import Cardapio from 'pages/Cardapio';
import Footer from 'components/Footer';
import Inicio from 'pages/Inicio';
import Sobre from 'pages/Sobre';
import Prato from 'pages/Prato';
import Menu from 'components/Menu';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PaginaPadrao from 'components/PaginaPadrao';
import NotFound from 'pages/NotFound';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />} >
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} />
          </Route>
          <Route path='prato/:id' element={<Prato />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}