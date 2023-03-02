import * as React from 'react';


let current_clock = null;

function App() {
	const [cycle_count, set_cycle_count] = React.useState(0);	
	const [time_display, set_time_display] = React.useState(0);

	const timer = time =>
	{
		if(current_clock != null)
			clearInterval(current_clock);
		let time_left = time;
		set_time_display(time_left);
		const clock = setInterval(() => 
		{
			if(time_left === 0) clearInterval(clock);	
			time_left--;
			set_time_display(time_left);
		}, 1000);
		current_clock = clock;
	}
  return (
    <div className="App">
			<p>{time_display}<sup>{cycle_count}</sup></p>
			<button onClick={() => timer(250)} > work </button>
			<button onClick={() => timer(50)}> break </button>
    </div>
  );
}

export default App;
