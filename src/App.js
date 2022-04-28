import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import WelcomeScreen from './screens/welcome/WelcomeScreen';
import FileUploadScreen from './screens/file_upload/FileUploadScreen';
import FormScreen from './screens/form/FormScreen';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<WelcomeScreen />} />
        <Route path='/file-upload' element={<FileUploadScreen />} />
        <Route path='/form' element={<FormScreen />} />
      </Routes>
    </div>
  );
}

export default App;
