import Home from './pages/home'
import JrNinjas from './programs/JrNinjas';
import JrDragons from './programs/JrDragons';
import SrDragons from './programs/SrDragons';
import BushidoWarriors from './programs/BushidoWarriors';
import { Routes, Route } from "react-router-dom";
import Layout from './Layouts/RootLayout';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/programs/1" element={<JrNinjas />} />
          <Route path="/programs/2" element={<JrDragons />} />
          <Route path="/programs/3" element={<SrDragons />} />
          <Route path="/programs/4" element={<BushidoWarriors />} />
        </Route >
      </Routes>

    </div>
  )
}

export default App
