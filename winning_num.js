let winning_num=19;
let user_guess=prompt("Guess a number");
if(user_guess===winning_num)
{
    console.log("Congratulations:You have guessed right number")
}
else if(user_guess>winning_num)
{
    console.log("Too far from winning number")
}
else
{
    console.log("Too low from winning number");
}