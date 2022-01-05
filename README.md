# Phase1-Final-Project
## Sunil's Card Shop

### Overview
Sunil's Card Shop will be an auction site to auction off a collection of "YuGiOh" brand cards.
Visitors will be able to view a collection of available cards, and from there, they can choose to bid on a certain card or buy that card at a set price.




### Features
The page will load with a menu, a countdown timer, and two Buttons. 
The "View Collection" button will pull up a list of cards from a server and display them on the page.
The "Auction New Card" button will let the user upload their own card, using a form, to the server for auction. 
Each card will have two buttons attached to them:
The Bid button will increment the value of the card by $5, with bidding starting at $5
The Purchase button will let the user purchase the card at a set price





### Project Requirements
1. HTML/CSS/JS files which access data from db.json file
2. Single page HTML
3. DOMContentLoaded, 4 seperate Event Listeners for buttons, 1 Event Listener for a form submit
4. Adding new card will update server file via POST. Purchasing card will remove card from server via DELETE 