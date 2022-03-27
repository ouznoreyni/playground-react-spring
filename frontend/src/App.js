import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ListeTransactions from './pages/ListeTransactions';
import CreatedTransaction from './pages/CreatedTransaction';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/transactions/create' element={<CreatedTransaction />} />
        <Route path='/transactions' element={<ListeTransactions />} />
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
