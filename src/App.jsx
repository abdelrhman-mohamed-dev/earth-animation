
import './App.css'
import HoverCard from './components/hover-card'

function App() {

  return (
    <div className="screen-center">
      <div>

        <div className="earth-container">
          <img className="earth" src="/Earth Illustration.svg" alt="Earth" />
        </div>
        <img className="ellipse ellipse-1 animate-ellipse-1" src="/Ellipse 1.svg" alt="Ellipse 1" />
        <img className="ellipse ellipse-2 animate-ellipse-2" src="/Ellipse 2.svg" alt="Ellipse 2" />
        <img className="ellipse ellipse-3 animate-ellipse-3" src="/Ellipse 3.svg" alt="Ellipse 3" />
      </div>
    </div>
  );


}

export default App
