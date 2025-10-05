# Fuzzy Contracts

A little slide show app to present my concept that AI could be useful in easing the pain of deploying changes between client and server by making some assumptions and adjusting the contract to match the client scheme.


## Presentation Notes/Cues

Thanks for coming to Fuzzy Contracts! Let's get into it.

[The Plan]

Today I'm going to introduce you to something that has frustrated me for years as a developer, but due to the nature of our work, I shrugged it off as an un-fixable problem. I'm going to show you a piece of code that uses AI to ease the pain of needing strict contracts between an api and the client using it. This thing I'm going to show you is pretty cool, after all I sprung out of my bed at 6 am one morning to scribble down my concept so I wouldn't forget. However...

[The Goal]

My goal here is not to present some epic new piece of code. The more I'm in this industry the more I realize this job is so rarely about the code. It's about how we visualize and tackle problems. For a very long time we have worked under certain structures and assumptions that were, in part, built the way they are because of the tools we had access to. AI tooling has changed how we can solve problems but as humans it can be difficult to rethink the old structures we have set up in our minds. My goal is to show you it's time to rethink all the things you take for granted from day to day and build something new!

[NEXT]

So lets talk about the thought I had!

API contracts are essential for reliable communication between client-side and server-side code. 
Without well-defined data structures, errors can occur, sometimes these errors are severe enough 
to bring down the entire application. So, what is a contract.

[The Contract]

A contract in software is a design document and a shared commitment, guiding the development and interaction between the API and its consuming clients. Effectively it states, "this is how we as client and api are going to talk to one another. One of the most critical pieces of this conversation is an agreed upon shape of the data.

As developers, we plan carefully when we change our data structure. Often, this planning involves creating multiple pull requests just to manage these data updates.

[The Shape]

For example, imagine our client expects an object with the fields: "name" and "birth_date". But, we realize "birth_date" doesn't quite describe the date very well. Instead, we want to use a new, more descriptive field called "favorite_date". To accomplish this, developers need to replace "birth_date" with "favorite_date" on both the client and the server.

[NEXT]

This process usually involves the following steps:

[The Process]

The server side adds "favorite_date" to the data sent to the client but does not remove "birth_date". The client then receives both dates and replaces all instances of "birth_date" with "favorite_date". Now, it is safe for server side to remove the unused "birth_date" field from the data.

[The Consequence]

The consequence is a total of 3 PRs and they must be released in this order. It can be tedious to plan and execute, if the timing is off apps can break and it is slow because each pr must be released in a proper order.

There are very good reasons why this is the structure we have built using the tools that we have. When executed correctly it keeps our apps error-free and working correctly for our users! But we have new tools now, so let's build something different.

[NEXT]

[The Thought]

The thought that I had when I jumped out of bed at 6AM that morning was: could I ask AI to massage the data into the shape I desired even if the data didn't match the contract?

[The Theory]

In theory, if the server was ahead of the client in making it's changes the client might receive the newly shaped data but expect the old data. If the client was ahead of the server then vise versa. Ultimately either side could change first as long as AI could help reshape the data when we found an issue.

[The Consequence]

In this case, the server side can add the new field and remove the old field, while the client updates to the shape it expects and can safely update any uses of that field. We now have 2 PR's instead of 3 and these PR's can be merged independently from one another. We would depend less on a very strict contract and could rely on a fuzzier one.

Ok so I didn't want to let my idea just wander around the roads of theory so I built a little server with a single api endpoint and a client app that uses the data. Then I asked the powers that be at VitalSource for a gemini api key so I could make api calls to an AI framework in real time. And were going to test all this in a live demo. Im going to show you what happens to our little app if the strict contract is broken on either client or server side. Then I'm going to turn on an api interceptor that allows AI to change the data when a contract is not upheld in hopes that we can resolve the issue. For this I'm going to need to swap back and forth between my browser and my code editor to explain what's going on.

Ok here is the server, as you can see right now it simply returns the name of the user and some facts about them. Currently the only fact is birth date.

And here is where we make our api request for this person shaped object.

And here is our Demo app. we currently make a call to get some Person data and use that data down here to show the data we received, name and facts.birth_date.

[SWITCH]

[NEXT]

[The Demo] 

And here is the result. When the contract is abided by we see the data on the screen.

Let's change some stuff up and see the result. We're going to start with the server.

[SWITCH]

Just to shake things up I'm going to make the change to the contract more complex than the key name change I talked about earlier. We are going to completely remove the facts object and change birth_date to favorite_date like so... Remember this simulates what it would be like if we pushed a change to our server side code before the client side changes were made. So I'm going to save that, 

[SWITCH]

refresh the app and of course we get an error "Cannot read properties of undefined (reading 'birth_date')" because there is no longer a "facts" object to read from.

So let's put that back. 

[SWITCH]

And now let's update the client side as if the the client were ahead of the server changes. Instead of the Person object we will expect to see the NewPerson object with "name" and "favorite_date" only. We will also need to update the tsx or TypeScript will yell at us. 

[SWITCH]

Refresh. Ok so this time the issue is sneakier. The app has not shut down but our date we had before is missing! And of course it is, we are looking for key of "favorite_date" that does not exist on the data.

Ok so im just going to reset everything.

[SWITCH]

Now we can run it back but this time using AI to help us adjust the data shape if an issue is detected.

[SWITCH]

Right here we have a little AI adjust toggle. Right now it is off so we wont query the Gemini API. As you can see it says "Nope - feature is off.". We also won't query it if our data is in accordance to the contract's shape. So if I turn this on you can see "Nope - data looked good.". Let me explain what's happening behind the scenes before we make any data changes.

[SWITCH]

When a response is returned from the server it is intercepted by this method here. The config passes in a schema which defines the shape of the data the Client expects. If there is no schema or if we have AI adjust set to "off" we simply allow the response to flow through the app as normal. If that check is passed we look to see if the data in the response is the expected shape which is captured by this "success" constant. I wont go into to how this works bc it's not important. What is important is what happens with this constant. If the shape is good, the data is allowed to continue to the app. If it is not we let Gemini have a go at it.

This aiAdjust function is defined here. We pass in the schema and transform it into a string and add it to this statement. "Modify 'the data we received' to match 'the shape we desire' and ensure the response is valid JSON but not in a code block. If we don't specify that we don't want the code block Gemini thinks we want it formatted with ticks, which in this case we don't. We send the question and parse the answer. Sprinkle in some metadata about what we did and then return that to our interceptor. 

At this point we check if the AI's response matches our expectations. If not we simply send back the unedited response from the server but if it does we update the response with the AI answer and pass it along! If our first attempt failed in a real app, this would be a great chance to add some retry logic or even adjust the question asked of the AI in hopes for a better response.

So lets look at what happens now when we add our updates to the server or client side with AI adjust toggled "on".

So once again we are going to update the server only. 

[SWITCH]

Last time we had an unhandled error on the client side but this time we seem to be up and running. Look at the gray block. We recognized the data was misaligned and built this question to send to Gemini. And here is the answer it gave. We were able to pass that along and continue working smoothly. Let's put that back and change the client. 

[SWITCH]

So now the client is going to make it's changes first. I'm going to refresh the page and same thing! Data wasn't quite right so it adjusted to the new schema and our app is working. 

And what happens when the server and client are both updated? We return to a state where we no longer looking to Gemini to help us out.

[NEXT]

I seriously doubt this would be worth integrating into a live app but I believe going through the steps was really exciting and helpful in realizing that there are hard and fast rules we follow today that may have lost their value. We automate so we can let go of things we need, but don't want to hold in our heads anymore. After humans taught a computer how to add 1 plus 1 we were able to ask it to add anything plus anything. Before calculators there were structures in place to ensure people were learning to add but we've found a way to share the process of adding. I think AI is in many ways another form of human sharing. So before I take questions my question to you is, 

[The Question]

"What structures are you living in that we may have outgrown?"

[The End]



