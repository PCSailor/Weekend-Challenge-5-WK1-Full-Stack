create an app
records employee records
their salary
total all salaries
index.html input form
  Employee's First
  Employee's Last name
  Employee's ID Number
  Employee's Job Title
  Employee's Salary (Yearly)
submit button-clears out form
logic stores info
info appends to DOM
logic calculates all employee salaries
report back total monthly salary cost




---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

https://primeacademy.io/student/assignments/phi-weekend-challenge-5-wk1-full-stack
Assignment :: Weekend Challenge #5: WK1 Full Stack

Assignment Details
Back to the Future!
Remember our first weekend challenge? It's time to re-visit some old code and bring it up to date with everything you know. This will test your full stack and Angular knowledge!

Full Stack App

Convert your previous weekend 1 challenge application (original instructions below) to utilize Angular, Node/Express, AJAX, and SQL. Any application logic can remain on the client side, but all data storage should be handled by the server and your database. Be sure to include all your CREATE TABLE queries in a database.sql file in your repo!

Make use of Express routing modules to organize your server code. Your application should track salary usage on the page (original Pro Mode) and allow the user to remove this person from the list (original Hard Mode).

Hard Mode
No more deleting! Create an interface on the page that would allow you to toggle employees from active to inactive and back. Your salary total should only tally active employees and change as employees are changed. Be sure to style the inactive employees differently than active ones.

Pro Mode
Bring in ngRoute and create a second view and controller as well as a nav bar. The second view will handle setting a monthly salary budget (in the database!) and display budget limit history. The first view then needs to be updated to tell the user if the active employees are over the latest budget limit set. There are several ways to solve this, but for Pro mode, move all of your AJAX requests into a factory so that $http is not a dependency in any of your controllers. The angular factory should share the budget number between controllers.



Original Challenge Instructions



Hard Mode

Create a delete button that removes an employee from the DOM. Note that in hard mode, it need not remove that Employee's salary from the reported total.

Pro Mode

Once the employee is deleted, also update the total spend on salaries to discount the removed employee's salary. This will require that the logic knows which element was removed. You will need to stretch yourself for this one. I also recommend that you look into jQuery's .data() function to help complete this. Note, you will need to do something both when the employee is added and when they are deleted to make your application 'smart'.
