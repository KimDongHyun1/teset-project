import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './pages/ToDo';
import Expense from './pages/Expense';
import ExpenseDetail from './pages/ExpenseDetail';
import StockPage from './pages/StockPage';

function App() {
  // logic

  // view
  return ( 
    <div >
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/todo" element={<ToDo />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/expense/:month" element={<ExpenseDetail />} />
        <Route path="/stockPage" element={<StockPage />} />
      </Routes>
    </div>
  )
}

export default App;
