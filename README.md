# Phase1-Final-Project
## Sunil's Card Shop

### Overview
Sunil's Card Shop will be an auction site to auction off a collection of "YuGiOh" brand cards.
Visitors will be able to view a collection of available cards, and from there, they can choose to bid on a certain card or buy that card at a set price.
Users will also be able to submit a card for auction. They will enter the card's information as well as a link to a picture of the card. When submitted a preview of the card will be shown on the bottom of the screen, and when the card collection is loaded, their card will be at the bottom of the list.



### Features
The page will load with a menu, a countdown timer, and two Buttons. 
The "View Collection" button will pull up a list of cards from a server and display them on the page.
The "Auction New Card" button will let the user upload their own card, using a form, to the server for auction. 
Each card will have two buttons attached to them:
The Bid button will increment the value of the card by $5, with bidding starting at $5
The Purchase button will let the user purchase the card at a set price and remove the card from auction.





### Project Requirements
1. HTML/CSS/JS files which access data from db.json file
2. Single page HTML
3. DOMContentLoaded, 4 seperate Event Listeners for buttons, 1 Event Listener for a form submit
4. Cards will be loaded from db.json file to page via fetch request
5. Adding new card will update server file via POST. Purchasing card will remove card from server via DELETE 