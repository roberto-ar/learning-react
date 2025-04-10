import './App.css'
import { useState, useEffect } from 'react'

const FollowMouse = () =>{
  const [enabled, setEneable] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
useEffect(()=>{
  document.body.style.cursor = enabled ? 'none': 'auto';
  return () => {
    document.body.style.cursor = 'auto';
  }
}, [enabled])

  useEffect(()=>{
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({x: clientX, y: clientY});
    }

    if(enabled){
      console.log(enabled);
      window.addEventListener('pointermove', handleMove);
    }

    return () => {
      console.log("Cleanup");
      window.removeEventListener('pointermove', handleMove);
    }
  }, [enabled])
  return(
    <>
    <div style={{
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      border: '1px solid #fff',
      borderRadius: '50%',
      opacity: 0.8,
      pointerEvents: 'none',
      left: -25,
      top: -25,
      width: 50,
      height: 50,
      transform: `translate(${position.x}px, ${position.y}px)`
    }}
    />
    <button onClick={() => setEneable(!enabled)}>{enabled ? "Desactivar" : "Activar" } seguir con el cursor</button>
  </>
  )
}
function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
