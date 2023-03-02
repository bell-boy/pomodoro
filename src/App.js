import * as React from 'react';
import { timer } from './timer.js';

function App() {
	const [pomodoro_count, set_pomodoro_count] = React.useState(0);	
	const [time_display, set_time_display] = React.useState(0);

	let audio = new Audio(require('./chime.mp3'));

  return (
    <div className="App">
			<p>{time_display}<sup>{pomodoro_count}</sup></p>
		
			<button onClick={() => timer(250, set_time_display, () => {
				set_pomodoro_count(pomodoro_count);
				audio.play();
			})} > work </button>
			<button onClick={() => timer(50, set_time_display, () => audio.play())}> break </button>
    </div>
  );
}

export default App;
