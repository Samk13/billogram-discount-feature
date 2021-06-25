# discount code test

## How to start:

- Make sure you have Docker installed and running on your machine
- run:
  ```bash
      docker-compose up --build
  ```

## Feature design task

We want you to plan and design an implementation of a feature in an existing system.
We would like you to present your schematics at our next meeting, take us through your
thought process and motivate your choices. Mode of presentation is up to you; draw on a
whiteboard (consider the meeting location though - to be honest we don’t really recommend virtual whiteboards), make a presentation or use any other medium you prefer.
To try to scope the task somewhat, we have picked a few aspects of system design that we want to hear more about. If there are aspects mentioned that you have not got as much experience with, that is all right – just focus on the areas where you feel more
comfortable.

## The aspects

APIs – anything HTTP based

- Data stores
- Data validation – how and for what data
- Async communication
- Authentication
  Scalability is important for this business developer so this system is built with a micro service architecture. Below is a list of use cases, most of which are already implemented.
  Your task is to design the feature of getting a discount code. The user stories for this feature are listed below. You may imagine the surrounding system as whatever you would like in terms of communication, data storages, etc. to support your feature.
  Remember that there is no right or wrong here; we want to understand your tech choices and your thought process.

## The business case

We want to build a service for discount codes. The idea is that a brand can create their own page in our marketplace where they can make discount codes available. As a user of our market place you create an account and in exchange for the discount codes you agree to share your contact information with the brand you got the code from. The vision
is to be the one stop solution for loyalty programmes.
Focus functionality on the user who is there to get discount codes. The product
description is vague on purpose so you can make your own choices. We are interested in
tech, not trying to build a new business. :)

## User flows

- Login - implemented
- Create a brand page on the marketplace - implemented
- Browse brands and stores - implemented
- Search for brands and stores - implemented
- Get discount code - your time to shine

## User stories - Get discount code

- As a brand I want to have discount codes generated for me so that I don’t have to deal
  with this administration myself.
- As a logged in user I want to be able to get a discount code so that I can get a discount
  on a purchase.
- As a brand I want to be notified about a user getting a discount code so that I can
  process information about the user for my loyalty programme.

## Programming task

You don’t hire a chef without tasting their food, and similarly we’d like to have a look at
your code. We’re interested in your structure, practices and design. So we would like you

to:

- Implement two of its endpoints:
- Generate a discount code
- The brand wants to create X number of discount codes
- Fetch a discount code
- A user of the system gets a discount code
- Document your endpoints.
- Document how to set up and start the application.

- The storage for discount codes in the service can be a real database, something in
  memory or just hard coded mock data as you like and have time for. Even if you end up
  using a simplified datastore we are interested in how you model and structure the data.

Feel free to use any language, web framework or 3rd party modules that you’d like.
We
recommend using something you are already familiar and comfortable with.
Please send us a link to a github repo with your implementation.
Don’t let the above limit you; if you can derive inspiration from your thought process in
the previous feature design task, please feel free to do so. We are interested in seeing
