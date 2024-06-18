import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import '../styles/global.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </Router>
  );  
}

export default App;
