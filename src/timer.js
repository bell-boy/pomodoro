import * as React from 'react';

// time is the time that the timer should take, set is the set function for a reactive component, callback is a function that should be run on finish.
let current_clock = null;
const timer = (time, set, callback=null) =>
{
	if(current_clock != null)
		clearInterval(current_clock);
	let time_left = time;
	set(time_left);
	const clock = setInterval(() => 
	{
		if(time_left === 1) 
		{
			if(callback !== null) callback();
			clearInterval(clock);	
		}
		time_left--;
		set(time_left);
	}, 1000);
	current_clock = clock;
}

export { timer };
