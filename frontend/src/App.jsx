import { Routes, Route } from 'react-router-dom';
import './components/components.css';
// import './App.css';
import Home from './pages/Home';
import Sign from './pages/Sign';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import AddItemModal from './components/AddItemModal';
 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign" element={<Sign />} />
      <Route
        path="/dashboard"
        element={
         
            <Dashboard />
          
          
        }
      />
     
    </Routes>
  );
}

export default App;
