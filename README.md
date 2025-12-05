# Music Rating Application
Project to make a Music Ranking Application

# Pitch 
I want to create a music ranking application that will allow a user to compare two albums, and pick their preferred album, and do that for a lot of different album and derive a ranking off of that. There is not really a collective app for ranking albums that I am aware of (like Letterboxd with movies) so my hope would be to bring music listeners together in a community to help rank albums and help write great reviews

# Why This Project is Interesting To Me
It is mainly interesting to me because I love music, and I wanted to try and make some sort of application that could allow for groups of music listeners to gather to. Sort of how Letterboxd is a place for movie lovers to gather over the internet. I also wanted an opportunity to flesh out an application idea and see how far I could take it. 

# Goals
- Build a nice UI frontend
- Figure out how to best store users, albums, their rankings etc.
- Figure out the math on how to calculate their actual rankings out of ten.

# Technologies
- Frontend in react
- Backend in either python or typescript (Node.js)
- Database would be a SQL based database most likely (Supabase)
- Hosting on Vercel
- Calling Spotify API and Billboard API as well

# Diagrams and Demo Videos
Demo Video [Here](https://github.com/user-attachments/assets/fee57823-5daf-4571-8a3b-ee35cd8e2d8e)

ERD Diagram Link: https://drawsql.app/teams/brigham-young-university-13/diagrams/erd-for-music-app

System design (simple right now):
<img width="886" height="886" alt="image" src="https://github.com/user-attachments/assets/3c20e3da-1ffa-42d7-92e5-ca73255e47bd" />

# Initial Goals
- Start the UI
- Research Database Applications
- Think about system design
- Start on the backend
- Figure out the algorithm to calculate user rankings

# What I've Learned and Key Learnings
- Different frontend technologies and libraries that are helpful in building an application quickly
- Thinking about database design in the context of my own project
- Learning about different backend technologies and deciding what would be best for users, and what my application needs
- Thinking about the user experience and the flow of an application
- Mainly learned a ton about UX design

# AI in this project and Usage during this project
- In this project, I can see integrating AI in an interesting way on the explore page, where we can potentially be able to recommend similar songs to users through AI
- For AI usage in this project, I used it to help me mainly just get ideas for the application and help debug

# Failover strategy, Authentication, Scaling
- For scaling and failover, I was planning on having multiple web server nodes handle traffic for a lot of users, and also implement a message queue to handle user request more effectively as well
- For authentication, I was thinking of using Supabase's authentication service
