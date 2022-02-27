import './App.css';
import * as Tone from 'tone';

function App() {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  let keyMapping = {
    'a': 'C4',
    'w': 'C#4',
    's': 'D4',
    'd': 'E4',
    'f': 'F4',
    'g': 'G4',
    'h': 'A4',
    'j': 'B4',
    'k': 'C5'
  }
  window.addEventListener('keypress', e => {
    if (keyMapping[e.key]) {
      playNote(keyMapping[e.key]);
    }
  });

  function playNote(note) {
    synth.triggerAttackRelease(`${note}`, "5n");
  }

  return (
    <div className="App">
      <header className="App-header">
        <ul className='keyboard'>
          <li className='white' onClick={() => playNote('C4')}>C</li>
          <li className='black' onClick={() => playNote('C#4')}>C#</li>
          <li className='white' style={{ margin: '0 0 0 -1em' }} onClick={() => playNote('D4')}>D</li>
          <li className='black' onClick={() => playNote('D#4')}>D#</li>
          <li className='white' style={{ margin: '0 0 0 -1em' }} onClick={() => playNote('E4')}>E</li>
          <li className='white' onClick={() => playNote('F4')}>F</li>
          <li className='black' onClick={() => playNote('F#4')}>F#</li>
          <li className='white' style={{ margin: '0 0 0 -1em' }} onClick={() => playNote('G4')}>G</li>
          <li className='black' onClick={() => playNote('G#4')}>G#</li>
          <li className='white' style={{ margin: '0 0 0 -1em' }} onClick={() => playNote('A4')}>A</li>
          <li className='black' onClick={() => playNote('A#4')}>A#</li>
          <li className='white' style={{ margin: '0 0 0 -1em' }} onClick={() => playNote('B4')}>B</li>
          <li className='white' onClick={() => playNote('C5')}>Ċ</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
