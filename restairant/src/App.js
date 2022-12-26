import './App.css';
import About from './Components/Aboutus/About';
import Chef from './Components/Chef/Chef';
import Header from './Components/Header/Header';
import Laurel from './Components/Laurels/Laurel';
import Navbar from './Components/Nav/Navbar';
import Special from './Components/Special/Special';
import Video from './Components/Video/Video';
function App() {
  return (
    <div>
    <Navbar/>
    <Header/>
    <About/>
    <Special/>
    <Chef/>
    <Video/>
    <Laurel/>
    </div>
  );
}

export default App;
