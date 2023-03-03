import * as React from 'react';
import './App.css';
import { timer } from './timer.js';

function App() {
	const [pomodoro_count, set_pomodoro_count] = React.useState(0);	
	const [time_display, set_time_display] = React.useState(0);
	const [bg_color, set_bg_color] = React.useState('#ffbebc');

	let audio = new Audio(require('./media/chime.mp3'));
	

  return (
    <div className="App" style={{ background: bg_color }}>
			<h1> pomdo </h1>
			<p className="display-text">{Math.floor(time_display/60)}:{(time_display%60).toString().padStart(2, '0')}<sup className="sup-sub-script">{pomodoro_count}</sup></p>
		
			<div className="button-container">
				<button onClick={() => timer(25*60, set_time_display, () => {
					set_pomodoro_count(pomodoro_count + 1);
					audio.play();
					set_bg_color('#fff5ba');
				})} > work </button>
				<button onClick={() => timer(5*60, set_time_display, () => {
					audio.play();
					set_bg_color('#ffbebc');
				})}> break </button>

				<button onClick={() => timer(15*60, set_time_display, () => {
					audio.play();
					set_bg_color('#ffbebc');
				})}> long break </button>
			</div>
    </div>
  );
}

export default App;
