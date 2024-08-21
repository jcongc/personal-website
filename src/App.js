import './App.css';
import HomeScreen from './components/homescreen';
import { Route, BrowserRouter, Routes, Navigate} from 'react-router-dom';
import Projects from './components/projects';
import Experience from './components/experience';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />}/>
          <Route path="/home" element={<HomeScreen />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/experience" element={<Experience />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
