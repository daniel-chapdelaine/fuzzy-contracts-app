# Fuzzy Contracts

A little slide show app to present my concept that AI could be useful in easing the pain of deploying changes between client and server by making some assumptions and adjusting the contract to match the client scheme.



## Presentation Notes/Cues

[Thanks for coming]
Thanks for coming to my talk on Fuzzy Contracts.

[The Plan]
Today I'm going to introduce you to something that has frustrated me for years as a developer but due to the nature of our work, I shrugged it off as an un-fixable problem. I'm going to show you a piece of code that uses AI to ease the pain of needing strict contracts between and api and a client using it. This thing I'm going to show you is pretty cool, after all I sprung out of my bed at 6 am one morning to scribble down my concept so I wouldn't forget. However...

[The Goal]
My goal here is not to present some epic new piece of code. The more I'm in this industry the more I realize this job is so rarely about the code. It's about how we visualize and tackle problems. For a very long time we have worked under certain structures and assumptions that were, in part, built the way they are because of the tools we had access to. AI tooling has changed how we can solve problem but as humans it can be difficult to rethink the old structures we have set up in our minds. My goal is to show you it's time to rethink all the things you take for granted from day to day and build something new!

[NEXT]

So lets talk about the thought I had!

API contracts are essential for reliable communication between client-side and server-side code. 
Without well-defined data structures, errors can occur, sometimes these errors are severe enough 
to bring down the entire application. So just so we are on the same page, what is a contract.

[A Contract]
A contract in software is a design document and a shared commitment, guiding the development and interaction between the API and its consuming clients. Effectively it states, "this is how we as client and api are going to talk to one another. One of the most critical pieces of this conversation is an agreed upon shape of the data.

As developers, we plan carefully whenever we change our data structure. Often, this planning involves creating multiple pull requests just to manage these data updates.

For example, imagine our client expects an object with the fields "name" and "birth_date". But, we realize "birth_date" doesn't quite describe the date very well. Instead, we want to use a new, more descriptive field called "favorite_date". To accomplish this, developers typically replace "birth_date" with "favorite_date" on both the client and the server.

[NEXT]

This process usually involves the following steps:

[Today's Process]
The server side adds "favorite_date" to the data sent to the client but does not remove "birth_date". The client then receives both dates and replaces all instances of "birth_date" with "favorite_date". Now, it is safe for server side to remove the unused "birth_date" field from the data.

[The Consequence]
The consequence is a total of 3 PRs and they must be released in this order. It can be tedious to plan and execute, if the timing is off apps can break and it is slow because each pr must be released in a proper order.

There are very good reasons why this is the structure we have built using the tools that we have. When executed correctly it keeps our apps error-free and working correctly for our users! But we have new tools now so let's build something different.

[NEXT]

[The Thought]
The thought that I had when I jumped out of bed at 6AM that morning was: could I ask AI to massage the data into the shape I desired even if the data didn't match the contract?

[The Theory]
In theory, if the server was ahead of the client in making it's changes the client might receive the newly shaped data but expect the old data. If the client was ahead of the server then vise versa. Ultimately either could change first as long as we could ask AI to help reshape the data when we found an issue.

[The Consequence]
Now, the server side can add the new field and remove the old field, while the client updates the shape it expects and can safely update any uses of that field. We now have 2 PR's instead of 3 and these PR's can be merged independently from one another. We would depend less on a very strict contract and could rely on a fuzzier one.

[NEXT]

[The Demo]
Ok demo time!
Write this!


[NEXT]

[The Close]
There are too many risks in this to be worth integrating into live app but I believe going through the steps was really exciting and helpful in realizing that there are hard and fast rules we follow today that may have lost their value. We automate so we can let go of things we need but don't want to hold in our heads anymore. After humans taught a computer how to add 1 plus 1 we were able to ask it to add anything plus anything. Before calculators there were structures in place to ensure people were learning to add but most people don't worry about that so much these days. We've found a way to share the process of adding. I think AI is just another form of human sharing. So before I take questions my question to you is, "What structures are you living in that we may have outgrown?"


[Questions]


