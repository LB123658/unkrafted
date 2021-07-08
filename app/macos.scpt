display dialog "Continue to Unkrafted" buttons {"Open game", "About", "More"}
set b to the button returned of the result
if b = "Open game" then
	open location "https://lb123658.github.io/unkrafted?game=playing"
	display notification "Unkrafted opened"
else if b = "About" then
	display dialog "UNKRAFTED
Version 1.0

How to play:
Use the arrow keys to move left and right.
The spacebar lets you jump.
Use the '1' and '2' keys to change emotions.
Avoid the falling bombs.
Each night health returns to full." buttons {"Close"}
	display notification "About Unkrafted"
else if b = "More" then
	open location "https://lb123658.github.io/unkrafted/app"
	display notification "Get more from Unkrafted"
end if
