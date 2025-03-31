This is a simple boxing game written in javascript


Below is an explanation of how the game works. 
It will breakdown how the hits are delivered and how each hit differs in the damage delivered.
Players take turns delivering damage to their opponent. Damage is randomly set between 1 and 10 points.
Basic Hit: Damage less than 6.
Critical Hit: Damage between 6 and 9 (inclusive).
Knockout: Damage equal to 10.
If either player's health drops to 0 or below, they are knocked out, and the game ends.
Gameplay Sequence
Below is the sequence of events you should see emulated in your boxing game. We use this logic to determine the direction our code should go in. This would be a good example of developing pseudo code before jumping into our scripts.


1. Check whose turn it is to determine who is taking damage
2. Set damage to a random number
3. Check what category the damage falls under
4. Reduce damage the player receiving the hit
5. Check their health at its current state to determine a knockout
6. Switch player turns

Expected Output
When the program runs, it alternates hits between the two boxers, displaying the results of each hit until one boxer is knocked out. Below you can see the desired output you should find in your VSCode terminal.

Starting the Boxing Game!
Player 1 vs Player 2
Player 1 lands a critical hit on Player 2!
Player 2's health is now 93.
It's now Player 2's turn.
Player 2 lands a basic hit on Player 1!
Player 1's health is now 97.
It's now Player 1's turn.
Player 1 lands a basic hit on Player 2!
Player 2's health is now 92.
It's now Player 2's turn.
Player 2 lands a basic hit on Player 1!
Player 1's health is now 93.
It's now Player 1's turn.
Player 1 lands a KNOCKOUT on Player 2!🥊
Player 2's health is now 0.
Player 2 has been knocked out!
Player 1 is the WINNER! 🏆
