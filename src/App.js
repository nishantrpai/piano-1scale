import logo from './logo.svg';
import './App.css';
import * as Tone from 'tone';
import { useEffect } from 'react';

function App() {
  let synth;
  let now;
  useEffect(() => {
    synth = new Tone.PolySynth(Tone.Synth).toDestination();
    window.addEventListener('keypress', e => {
      if(e.key === 'a'){
        playNote('C');
      }
      if(e.key === 's'){
        playNote('D');
      }
      if(e.key === 'd'){
        playNote('E');
      }
      if(e.key === 'f'){
        playNote('F');
      }
      if(e.key === 'g'){
        playNote('G');
      }
      if(e.key === 'h'){
        playNote('A');
      }
      if(e.key === 'j'){
        playNote('B');
      }
      if(e.key === 'k'){
        playNote('Cmin');
      }
    });

  }, [])

  function playNote(note) {
    let tone = note;
    let pitch = 4;
    if (note.includes('min')) {
      tone = note.replace('min', '');
      pitch = 5;
    }
    synth.triggerAttackRelease(`${tone}${pitch}`, "8n");
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='keyboard'>
          <button id='button' onClick={() => playNote('C')}>C</button>
          <button id='button' onClick={() => playNote('D')}>D</button>
          <button id='button' onClick={() => playNote('E')}>E</button>
          <button id='button' onClick={() => playNote('F')}>F</button>
          <button id='button' onClick={() => playNote('G')}>G</button>
          <button id='button' onClick={() => playNote('A')}>A</button>
          <button id='button' onClick={() => playNote('B')}>B</button>
          <button id='button' onClick={() => playNote('Cmin')}>Ċ</button>
        </div>
      </header>
    </div>
  );
}

export default App;
