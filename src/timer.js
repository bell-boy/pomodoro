
// time is the time that the timer should take, set is the set function for a reactive component, callback is a function that should be run on finish.
let current_clock = null;
let playing = false;
let public_callback = null;
let public_set = null;
let time_left = 0;
const timer = (time, set, callback=null) =>
{
	public_callback = callback;
	public_set = set;
	playing = true;
	if(current_clock != null)
		clearInterval(current_clock);
	time_left = time;
	set(time_left);
	const clock = setInterval(() => 
	{
		time_left--;
		set(time_left);
		if(time_left === 0) 
		{
			if(callback !== null) callback();
			clearInterval(clock);	
			current_clock = null; 
			playing = false;
		}
	}, 1000);
	current_clock = clock;
}

const stop = () => {
	if(playing)
	{
		clearInterval(current_clock);	
		playing = false;
	}
	else if(current_clock != null) 
	{
		timer(time_left, public_set, public_callback);
	}
}

export { timer, stop };
