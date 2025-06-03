import { Routes, Route } from 'react-router-dom';
import Blobface from './page/Blobface';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Blobface />} />
    </Routes>
  );
}

export default App;
