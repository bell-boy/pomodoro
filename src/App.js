import * as React from 'react';

// time is that the timer should take, set is the set function for a reactive component.
let current_clock = null;
const timer = (time, set, callback=null) =>
{
	if(current_clock != null)
		clearInterval(current_clock);
	let time_left = time;
	set(time_left);
	const clock = setInterval(() => 
	{
		if(time_left === 0) 
		{
			if(callback !== null) callback();
			clearInterval(clock);	
		}
		time_left--;
		set(time_left);
	}, 1000);
	current_clock = clock;
}

function App() {
	const [pomodoro_count, set_pomodoro_count] = React.useState(0);	
	const [time_display, set_time_display] = React.useState(0);

  return (
    <div className="App">
			<p>{time_display}<sup>{pomodoro_count}</sup></p>
		
			<button onClick={() => timer(250, set_time_display, () => set_pomodoro_count(pomodoro_count + 1))} > work </button>
			<button onClick={() => timer(50, set_time_display)}> break </button>
    </div>
  );
}

export default App;
