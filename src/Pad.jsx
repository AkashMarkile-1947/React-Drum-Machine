import { useState, useEffect } from 'react';
import audios from './assets/audio.mjs';
import audioTwo from './assets/audioTwo.mjs';
import './App.css'

function Pad({clip, volume, setPressKey}) {
    const [active, setActive] = useState(false);
     useEffect(() => {
     document.addEventListener("keydown", _handleKeyDown);
     return () => {
       document.removeEventListener("keydown", _handleKeyDown);
     }
    }, []);
      
    function _handleKeyDown(e) {
        if (e.keyCode === clip.keyCode) {
          playAudio();
        }
     }
    
    const playAudio = () => {
      const audio = document.getElementById(clip.keyTrigger);
      setPressKey(clip.id);
      setTimeout(() => setPressKey(""), 400);
      audio.currentTime = 0;
      audio.volume = volume;
      setActive(true);
      setTimeout(() => setActive(false), 200);
      audio.play();
    }
    
    return (
    <div onClick={playAudio} id="{clip.keyTrigger}" className={`btn btn-secondary p-4 m-2 drum-pad ${ active && "btn-warning"}`}>
        <audio className="clip" id={clip.keyTrigger} src={clip.url} />
        {clip.keyTrigger}
    </div>
     )
  }

  export default Pad;