var ans = 1+ (Math.random()*99);
ans= Math.floor(ans);
var success = false;
var ctr=0


function start_game()
{
	do
	{
		ctr++;
		var guess=prompt('I am thinking of a number in the range 1 to 100.'
		+'\n\n'
		+'What is the number');
		guess = parseInt(guess);
		check_guess(guess);
	}while(success==false);		
}

function check_guess(guess)
{
	if(isNaN(guess))
	{
		alert('not a number');
	}
	else if(guess<1 || guess>100)
	{
		alert('wrong range');
	}
	else if (guess==ans) 
	{
		success = true;
		alert('You got it! The number was '
		+ ans 
		+'\n\n'
		+'It took you '
		+ctr
		+' guesses to get the number!');
	}
	else if (guess<ans) 
	{
		alert('Your number is too small!');
	}
	else
	{
		alert('Your number is too large!');
	}
}
			
			
			
		