import Home from './pages/home'
import JrNinjas from './programs/JrNinjas';
import JrDragons from './programs/JrDragons';
import SrDragons from './programs/SrDragons';
import BushidoWarriors from './programs/BushidoWarriors';
import { Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation'
function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
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
