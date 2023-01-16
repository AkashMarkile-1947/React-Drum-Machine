import { useState, useEffect } from 'react'
import audios from './assets/audio.mjs';
import audioTwo from './assets/audioTwo.mjs';
import Pad from './Pad.jsx';
import './App.css'


function App() {
  const [volume, setVolume] = useState(1);
  const [chord, setChord] = useState(false);
  const [pressKey, setPressKey] = useState("");
  const switchMode = (e) => {
    setChord( !chord );
  }
  
  return (
    <div className="container-fluid">
      <h1 className="title-heading">The Drum Machine 🎼</h1>
      <div className="drum-machine">
      <div className="control-container">
        <div>
        <h3>Volume</h3>
        <input 
          type="range"
          step="0.1"
          volume={volume}
          onChange={(e) => setVolume(e.target.value)}
          max="1"
          min="0.1"
          className="vol-control w-80"
          />
        <span>{volume}</span>
      </div>
      <div className="display-container">
        <h3>Key</h3>
        <span className="mode-display" id="display">
          {pressKey}
        </span>
       </div>
      <div className="mode-switch">
        <h3>Mode Switch</h3>
        <button className="switch-btn" onClick={switchMode}>
          Switch
        </button>
        <span className="mode-display">
          {
            chord 
              ? "Piano Chord"
              : "Heater Kit"
          }
        </span>
      </div>
      </div>
      <div id="drum-machine" className="drum-container">
        {
          chord
          ? audioTwo.map(clip => <Pad key={clip.id} clip={clip} volume={volume} setPressKey={setPressKey} />)
          : audios.map(clip => <Pad key={clip.id} clip={clip} volume={volume} setPressKey={setPressKey} />)
        }
      </div>
      </div>
    </div>
  );
}

export default App;
