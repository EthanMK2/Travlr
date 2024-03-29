# Travlr Getaways: CS-465 Full Stack Application

## Architecture

I developed two different types of frontend development in this project: an Express HTML site and an Angular Single-Page Application. The Express site is the customer-facing part that requests a new HTML page when the user visits a new link on the website. This requires some loading time and a request to the server for the files of each page. The Express architecture was used for the customer-facing side due to the relative simplicity of adding new HTML pages for somewhat differing content. The Angular frontend was a simpler design where administrators can login, view, edit, add, and delete vacation trips. There are fewer pages, but the SPA architecture allows the user to switch between edit and addition pages for a clean, reactive user experience. 

The database backend features a NoSQL MongoDB DBMS due to the relative ease and speed of the use and integration of the system into the frontend. MongoDB has Mongoose as a middleware that helps us programmatically implement CRUD features with security and speed. NoSQL also allows for a flexible modeling style that makes data modeling quick and simple, especially with Mongoose.

## Functionality

JSON is JavaScript Object Notation based on their string types that can be easily translated into JavaScript objects. This means the backend NoSQL can directly send the JSON data it works with to the backend, through to the frontend without much hassle due to the built-in methods to extract the data into JavaScript. 

The benefits of reusable UI components primarily include scaling and testing. We can develop each component separately, and use testing software and techniques to ensure that the component is behaving as expected. Scaling an application becomes important as it grows. Reusable components allow for scaling the application to include new functionality and security. For example, this project could include a new admin interface with different permissions, such as only edit permissions, but still uses the same trip listing component to view the trips. Also, if the customer-facing side needs to be migrated to a SPA architecture, the UI components can help make that process easier. 

## Testing

With an application that needs security and database functionality, testing becomes more important as the project progresses in development. I implemented a RESTful API on the backend to communicate with the frontend. Before it is used or even tested on the frontend, it should be tested directly. This is done through a tool called Postman, which allows us to send requests with payloads and many other parameters. The request response is then displayed in Postman in an easy to read format. From here, I tested whether sending a tampered JWT would affect the API behavior correctly. I also tested whether the endpoints would send a proper response if they were correct or not. To finally confirm whether the data was in fact processed into the database, I used MongoDB’s Compass to verify the presence or absence of data. Overall, API testing in a full stack application requires thorough testing through tools and techniques, but without too much focus on the frontend part of API testing. The frontend is there to display the data and send requests, so as long as the frontend displays the data it is expecting, it is redundant to test the API through the frontend. In the end, the backend has to be working perfectly in order for the frontend to reflect it. 

## Reflection

This course greatly increased my understanding of the full stack and how web architectures make a web application work cohesively with services. I gained a better understanding of the Model View Controller architecture, and why it is used. I also learned a lot about how Angular as a framework works to bring a SPA frontend to life. I primarily work with React, but the exposure to Angular helps me understand the benefits and drawbacks of the two, at least from a developer perspective. 


If I plan on becoming a full stack developer, this course helped me establish a strong foundation on the fundamentals of security, architecture, and API development. I can now speak the language of full stack developers much more fluently than I did before. Even if I plan on becoming a front-end developer, my understanding of the full stack makes me much more competitive as a candidate. I understand why we have to translate JSON, process responses, and work with requests a certain way depending on the backend. As I progress in front-end development, I can then easily move to a full stack position with this prior experience. Thinking about the different contexts of the stack has become much easier for me. 

