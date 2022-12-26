import './App.css';
import About from './Components/Navbar/Aboutus/About';
import Header from './Components/Navbar/Header/Header';
import Navbar from './Components/Navbar/Nav/Navbar';
import Special from './Components/Navbar/Special/Special';

function App() {
  return (
    <div>
    <Navbar/>
    <Header/>
    <About/>
    <Special/>
    </div>
  );
}

export default App;
