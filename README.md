# my_data

**Author:** William Spongberg

Apps and services online grab, use and sell your data all the time. However, thanks to privacy acts, you can request a copy of all the data they have collected from you.

Unfortunately, this data is very hard to read and understand for the average person. This project aims to make it easier to understand the data you have collected, and gives helpful analytics and notes on e.g. who Instagram has sold your data to.

Also, I plan to add support for gambling sites that like to make it hard to see how much you have actually lost/gained. Most gamblers have no idea how much they have lost, and this project aims to make that clear. It would also be helpful to see graphs of how much you have lost/gained over time.

Using Deno because it's awesome. Can do backend, frontend and database and server hosting all in one.

## Supported Platforms

Raise an issue or email me at <william@spongberg.dev> if you want to see a platform supported.

- [TODO] Instagram
- [TODO] Facebook
- [TODO] YouTube
- [TODO] TikTok
- [TODO] Gambling sites

## Usage Design

- Upload data to frontend
- Data is processed in the browser.
- Data is sent to server/API for further processing.
- Data is returned to frontend for display.
- User can also download the data in a more readable format if they want.

## Future Features

- May have to make this a paid service to cover costs for outgoing API calls from server to e.g. the YouTube API. Would only become paid if too many requests are made, and would require a login.
- Call API with data. Would prefer not to store data on server for obvious privacy reasons.
- Would like to automatically grab data for users rather than forcing them to go through the ardous process of downloading their data from each platform themselves. Facebook already has some support for this, but will have to look further into it: <https://developers.facebook.com/docs/data-portability/>
- Work with governments to make it easier for users to get their data from companies. This is a privacy issue, and should be taken seriously. Companies should not be able to hide behind the excuse of "it's too hard to get the data".
- etc etc

## Dev Notes

Make sure to install Deno: <https://deno.land/manual/getting_started/installation>

Then start the project:

``` bash
deno task start
```

This will watch the project directory and restart as necessary.

/routes stores all of the routes. Fresh automatically sorts out all the routes and imports them.
(Does not include /routes in the url path)
