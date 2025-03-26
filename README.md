# capstone-project

We will be using HTML, CSS and JavaScript to tell the story of the Summer of 1969 in the United States of America.

The Summer of 1969
Overview
My capstone project for CODE:You. I used HTML, CSS and JavaScript to tell the fascinating story of the 3 months that comprised the summer of 1969 in the United States.

I created mobile responsive pages, including calendars, that will provide bits of pop culture and history that can be used to advance ones personal knowledge or help the win trivia night.

Features Utilized:
HTML 5
CSS
JSON files
JavaScript
Google API

The Quotes on all of the red-letter date pages are contained in arrays in JSON files and javascript is used to display those quotes on the even pages.  The quotes will changes eachtime the page is reloaded, or will change evey hour if the user stays on the page that long.
I also used a call-out to google maps API to try and display 2025 images of the places involved in the stories.

Clone the repository: git clone https://github.com/DanielString/capstone-project.git

Once index.html is launched, the main page displays the title of the site and a brief description of the time in question.  The user can then choose one of the three months that made up the summer of 1969.

Clicking a month will lead to a mobile responsive calendar for that month.  Clicking on any of the non-red letter dates will call a Javascript alert that will pop-up an event that occured on that day on 1969.

Clicking on a red-letter date will move the user into one of the additional html pages that describes one of the landmark days of that summer.

Within the 4 html pages there is a link (noted by its greyer color and italics).   Clicking on this will call on the Google Map API and provide a satellite view of the plce in question.  These will open in a new browser tab which can be closed to return to the main story pages.

I reached to get the Google Map API to get a closer look at the locations I wanted to spotlight, but I was unable to work out how to do so, so when accessing the maps, what is seen is a wider view than I had intended.

Eventually I would also like to make arrays for the non-red letter days so that each click on that day wil pull a random event for that day, instead of just the one fact that is there currently.