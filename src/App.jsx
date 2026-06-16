import {useState} from 'react';
import {Routes, Route} from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profilo from './pages/Profilo';
import {AuthProvider} from './context/AuthContext';

function App() {
  const [count, setCount] = useState(0);

  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profilo" element={<Profilo />} />
      </Routes>
      <main />
    </AuthProvider>
  );
}

export default App;
