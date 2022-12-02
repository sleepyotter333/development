# Development

### Link to Deployed Website
https://sleepyotter333.github.io/development/

### Goal and Value of the Application
The goal of this application is for a user to look through a list of items available for purchase at a bakery and favorite items they would like to purchase if they were to go to this bakery. This helps them organize their purchases before making them. This can prevent them from unecessarily spending money on items that they might not truly want. They also know the total price of all their items combined before arriving.

### Usability Principles Considered
I considered the visibility of system status. Changes that the user selects are instantly displayed. The second heuristic is also considered by using familiar phrases and not overcomplicating the wording. Following the fourth heuristic, I am consistent with my headings and wording to reduce cognitive load for the user. I also made everythign visible on one page so that users don't have to recall information. This website is also intutive for novice users to learn. The design is also very minimalistic.

### Organization of Components
I have three components, App, CurrentList, and BakeryItem. CurrentList is a component of App and BakeryItem is a component of CurrentList.

### How Data is Passed Down Through Components
Props are passed from CurrentList to BakeryItem containing all the data for the bakery items. The list of favorited items and tht total price of the favorited items is also passed to BakeryItem so that if an item is added to the list, it will be updated on CurrentList, as well as the total price.

### How the User Triggers State Changes
The user triggers a state change whenever they add or remove an item to their favorites using a switch, whenever they sort by alphabetical or price, and whenever they filter the bakery items. 
