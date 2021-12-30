import ServiceTypeScreen from './screens/service_type';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import AlgorithmScreen from './screens/algorithm_screen';
import UploadOptionScreen from './screens/upload_option_screen';
import LocationFormScreen from './screens/location_form_screen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ServiceTypeScreen />}/>
        <Route path='/algorithm' element={<AlgorithmScreen />} />
        <Route path='/upload-option/:algo' element={<UploadOptionScreen />} />
        <Route path='/location-form/:algo' element={<LocationFormScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
