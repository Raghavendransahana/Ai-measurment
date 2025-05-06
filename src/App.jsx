import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Inspirations from './pages/Inspirations';
import FormOne from './pages/FormOne';
import FormTwo from './pages/FormTwo';
import ToDoList from './pages/ToDoList';
import Finance from './pages/Finance';
import Navbar from './components/Navbar';

function App() {
  const [customerName, setCustomerName] = useState('');
  const handleCustomerDataSubmit = (name) => {
    setCustomerName(name);
  };
  return (
<div >

    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inspirations" element={<Inspirations />} />
       <Route
          path="/form-one"
          element={<FormOne onCustomerDataSubmit={handleCustomerDataSubmit} />}
        />
        <Route
          path="/form-two"
          element={<FormTwo customerName={customerName} />}
        />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/finance" element={<Finance />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
