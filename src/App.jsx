import './App.css'
import { Tldraw } from "@tldraw/tldraw";

function App() {

  return (
    <>
      <div className='Border'>

        <div className="underBor">
          
          <div className="draw-craft-studio">
          <img
            src="https://illustrations.popsy.co/red/man-running.svg"
            alt="Illustration"
            className="illustration"
            
            />
          <div className="content">
            <h1>DrawCraft Studio</h1>
            <p>Your Creative Space for Digital Art</p>
          </div>
        </div>


        <Tldraw className='outer'/>

      </div>

    </div>
      
    </>
  )
}

export default App
