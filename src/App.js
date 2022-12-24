import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
    <Navbar title = "Textutils" About = "about"/>
    <div className="container ">
      <Textform/>
    </div>
    
    </>
  );
}

export default App;
