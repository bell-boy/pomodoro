import * as React from 'react';

function App() {
	const [cycle_count, set_cycle_count] = React.useState(0);	
	const [time_display, set_time_display] = React.useState(0);
	const timer = time => // TODO: Add callback to cancel timer when starting new one.
	{
			let time_left = time;
			set_time_display(time_left);
			const clock = setInterval(() => 
			{
				if(time_left === 0) clearInterval(clock);	
				time_left--;
				set_time_display(time_left);
			}, 1000);
	}
  return (
    <div className="App">
			<p>{time_display}<sup>{cycle_count}</sup></p>
			<button onClick={() => timer(1000)} > work </button>
			<button> break </button>
    </div>
  );
}

export default App;
