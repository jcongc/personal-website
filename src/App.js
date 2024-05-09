import './App.css';
import Header from './components/header';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Projects from './components/projects';

function App() {
  
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/projects' element={<Projects />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
