import './App.css';
import About from './Components/Aboutus/About';
import Chef from './Components/Chef/Chef';
import Header from './Components/Header/Header';
import Navbar from './Components/Nav/Navbar';
import Special from './Components/Special/Special';

function App() {
  return (
    <div>
    <Navbar/>
    <Header/>
    <About/>
    <Special/>
    <Chef/>
    </div>
  );
}

export default App;
