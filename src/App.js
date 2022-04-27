import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import WelcomeScreen from './screens/welcome/WelcomeScreen';
import FileUploadScreen from './screens/file_upload/FileUploadScreen';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<WelcomeScreen />} />
        <Route path='/file-upload' element={<FileUploadScreen />} />
      </Routes>
    </div>
  );
}

export default App;
