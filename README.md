![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# SEI - Juicy Stories- Project 3
Our third project consisted of building a marketplace for content in one week.

---

# Marketplace for publishers to purchase content.

We were tasked with creating a full MERN stack web application, from an idea we came up with ourselves. - Coming up with an idea sounds much easier than it is! You have to consider product viability, time allocated to you and your team. The complexities of the end product. 

## Built With

1. React
2. Mongoose
3. NodeJS
4. Express

## Marketplace Mechanics

A online marketplace where users can sign-up to either list content to sell or find exclusive content to purchase. You arrive at a homepage which lists the top three stories / three pieces of exclusive content. The page consists of a navbar that has a logo. A search bar where you can search for specific video, images and audio. The login button which redirects to a login page. The sign-up button which redirects to a sign-up page and finally a button which links to a page listing all the stories/content available. One which gives a minor explanation of the website with a button which redirects to all stories. 

![readme-one](images/image-two.png)
![readme-one](images/image-one.png)

The user journey is to first register on the register page to get access to make any transaction on the page.

![readme-one](images/image-four.png)

After sign up the user is directed the login page for authorisation.

![readme-one](images/image-three.png)


Once a user is signed-in, the user has access to a dashboard in which they can view their purchases and sales. Also, here is the area in which the user can negotiate the price on the stories they're buying and selling. 

![readme-one](images/image-five.png)
![readme-one](images/image-six.png)
![readme-one](images/image-seven.png)

## Code and structure

The code is written in react with NodeJS. We used the mongoose NoSQL database to store the data and user information. We did not have the means to store pictures locally so they are from the internet. Seeds file were made to preload the data and users to the database.  The website "faker" was used to create usernames and pictures. 

 ![readme-one](images/seeds.png) 
 
The react components can be seen in the structure and made it possible to reuse code more places 


## Test
We added the user’s login since this is important for this type of site. Test will check for wrong type of login, too easy login and wrong password. 

![readme-one](images/test.png)

## Challenges in this project.

The group worked well together even though the difference of the coding skills were large. This gave me opportunity to learn a lot but at the same time having a challenge following the more complex ways of doing the code.
I made the backend API in mongo and most of the Authorisation. The takeaway learning was how important it is to make a good plan for how to structure the data.   


## Added Extra Features

Of extra features we added the small counter on "open request" tab to indicate messages have been send to the logged in user.


## Author

Morten Elbo - https://github.com/mElbo-dk
