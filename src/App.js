import ServiceTypeScreen from './screens/service_type';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import AlgorithmScreen from './screens/algorithm_screen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ServiceTypeScreen />}>
          <Route path='/algorithm' element={<AlgorithmScreen />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
