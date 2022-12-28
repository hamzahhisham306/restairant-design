import './App.css';
import About from './Components/Aboutus/About';
import Chef from './Components/Chef/Chef';
import Find from './Components/Findus/Find';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
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
    <Gallery/>
    <Find/>
    <Footer/>
    </div>
  );
}

export default App;
