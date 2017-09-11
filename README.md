# saySomething

Do you want to say something, but not really? Just write it in here and see it pop up.


## What I want to do:

Create a website with a pitch black background where users can enter a message. This message will be displayed in random places of the page. Position, size and lenght as well as frecuency will be also random. The messages need to be checked for crosswords, insults and things I don´t want hanging on my site.


### First of all
- Take the input.
- Limit input's length and maybe add a small counter which colour will be whiter the closer the remaining characters get close to zero.
- Push it to an array1.
- Empty the input.
- Add some information in the footer about how to interact with the page. It will show up in a small pop up.
- Also add some info about the project such as motivation and the link to GitHub's repo.
- BONUS: Move the S up while making it smaller.

### Displaying the stuff
- BONUS: Wait untill the user enters something to start the display.
- Get the array1.length.
- Get a random_number between 0 and the array1.length-1.
- Display the item on array1[random_number] in a random place of the screen.
- Take the item array1[random_number] out of the array1 and push it to array2.
- If array1.length is 0, repeat using array2.
- Make sure that when introducing the new input, it doesn't switch from array2 to array1 because array1.length is bigger than 0.


EXTRA: Make it responsive
