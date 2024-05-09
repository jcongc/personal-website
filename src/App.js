import './App.css';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import MmaStats from './components/ufcStats';
import HomeScreen from './components/homescreen';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/projects' element={<MmaStats />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
