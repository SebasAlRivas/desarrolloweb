
import './App.css';
import Contador from "./components/Contador";
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar';

import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
return (
<div className="App">
<Navbar />
<BrowserRouter>
<Routes>
<Route path="/home" element={<Home />}/>
<Route path="/about" element={<About />}/>

</Routes>
</BrowserRouter>
</div>
 );
}
export default App;
