import React from 'react'
import fullFarm from "../assets/fullFarm.png"
import farmazonMarket from "../assets/farmazonMarket.png"
import farmazonBackend from "../assets/farmazonBackend.png"
import farmazonEntry from "../assets/farmazonEntry.png"

const Farmazon = () => {
    return(
        <>
        <h1 className='title'>Farmazon</h1>
        <h2 className="title is-3">Welcome to the farm!</h2>
        <img
        className="photo landscape block"
        src={fullFarm}
        alt="A well stocked farm on Farmazon"
        title="A full diverse farm full of animals of different types"/>
      <p className="block">
        Above we can see a pretty busy farm, with animals bought in all 4 regions.
      </p>
      <p className="block">
        Farmazon was created, if you couldn't guess from the title, as a clone of an online sales website. In Farmazon, the user is able to buy animals of their choice, subject to their credit count, which then appear in their farm in the form of cute emojis. Further credits can be gained by the user, and in the market a user can peruse different animals, find out more details about them, and if desired add them to their cart. For ease of use and a better customer experience, animals can be 'favorited' and filtered by any combination of title, region or favorites.
        Once the customer is happy with their orders, or to review their cart, they are able to go to the cart page to review the pending purchases and remove any if they've change their mind. Finally the user can go to checkout to see their future credit count and from here either pay for their orders or just return to the product page.
      </p>
      <img
        className="photo block"
        src={farmazonMarket}
        alt="A view of the water animals in the market"
        title="The market, and a selection of some of the water animals"/>
        <p className="block">
        Here is part of the market, and some water animals available to buy.
      </p>
      <h2 className="title is-3">Tech Stack and Implementation</h2>
      <p className='block'>
      Like all of my projects, the code for this is public and can be found on my repository on github, the <a
          href="https://github.com/Jack-Burge55/farmazon-frontend"
          target="_blank"
          rel="noreferrer"
          className="textLink"
        >
        frontend
        </a> part as well as the <a
          href="https://github.com/Jack-Burge55/farmazon-backend"
          target="_blank"
          rel="noreferrer"
          className="textLink"
        >
        backend
        </a>.
        This project was originally a group project during my time with General Assembly. The project tech stack consists of Java using Spring boot for the back-end CRUD implementation, and React on the frontend. Originally this project also used PostgreSQL as a database storage, however currently the front and back-end simply use local host ports. A short term goal of mine is to make this public and hosted.
      </p>

        <h2 className="title is-4">Backend - Spring Boot using Java</h2>
        <p className='block'>Spring Boot was used to make a CRUD API (Create, Read, Update & Delete). For this reason it was important to understand the structure of the API and how to store the data. We settled on creating Models, Controllers, Repos and Services for 4 different types of data.</p>
        <ul>
            <li><b>User</b> - This is the object containing the information with regards to the user. This includes a personal id number, stored details about the user, credit amount, a tracker of what is owned by the user in their productLine property, or finally what is in their cart</li>
            <li><b>Cart</b> - This is the cart, which stores productLines of animals and their quantities which the user intends to buy. It is important that this is kept separate from the owned productLines of the user, we can't afford to give things away for free!</li>
            <li><b>ProductLine</b> - This is an array of products that may either be the cart or owned by the user. These contain products, as well as a link to the owner/cart and the quantity of the product in the productLine</li>
            <li><b>Product</b> - This is the item to be bought, and contains all relevant information about it. This includes its title, description, emoji and, of course, its cost.</li>
        </ul>
        <img
        className="photo block"
        src={farmazonBackend}
        alt="A view of the backend code"
        title="The basic structure of the backend code, split into Models, Controllers, Repos and Services."/>
        <p className='block'>The CRUD API has to be able to perform several different actions. Some of these include being able to create a new user, view a users details (for example, to display the users credit count) or update the users cart and owned productLines. The API can be independently tested using a relevant app. My choice is Insomnia, which I use to test API calls and which allow me to confirm they work as expected. Once this is checked and working properly, we can start creating the front-end which will call this API and display the results however we want!</p>
        <h2 className="title is-4">Frontend - React using JavaScript</h2>
        <p>My choice of front-end technology is React (the same as this website is using). The simple routing between different pages is easy to use and state management mean the page is quickly responsive with minimal code.</p>
        <img
        className="photo block"
        src={farmazonEntry}
        alt="Farmazon Sign Up"
        title="The sign up page for Farmazon, with basic input validations."/>
        <p className='block'>The landing page is the sign up page, which is a basic form with some validations. Once these are filled in and the sign up button is clicked a payload is sent to the API to create a new user and this is set into the database. A navbar at the top helps direct the farmer to different pages which subsequently have their own functionality. Each page does whatever API call is required at that point to have the relevant data. For example, on routing to the users farm page we perform a fetch API call using the users id to get the productLines owned by the user. The end goal from doing this is to, of course, know which animals are owned by the user and to then display these in the users farm. Other API calls include the PUT API call on the credits page. Here we send a payload including the number of new credits the user has applied for, and this then adjusts the credit total of that specific user.</p>
        <h2 className="title is-3">The Future of Farmazon</h2>
        <p className='block'>As mentioned above, the next step is to get this hosted. I am aiming to get this done using PostgreSQL as how it was previously made, as well as potentially using Docker to bundle the back and front-end to make this easily deployable. Further to actual functionality, I want to carry on improving the UI of Farmazon, add behaviour to the animals (make them move in their domains perhaps), and perhaps even add a social element to Farmazon where it is possible to have friends and see the status of your friends farm. Finally, having control over the appearance of your own farm would be a fun extra piece of functionality to add.</p>
      </>
    )
}
export default Farmazon;
