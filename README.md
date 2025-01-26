# my_data

**Author:** William Spongberg

Apps and services online grab, use and sell your data all the time. However, thanks to privacy acts, you can request a copy of all the data they have collected from you.

Unfortunately, this data is very hard to read and understand for the average person. This project aims to make it easier to understand the data you have collected, and gives helpful analytics and notes on e.g. who Instagram has sold your data to.

Also, I plan to add support for gambling sites that like to make it hard to see how much you have actually lost/gained. Most gamblers have no idea how much they have lost, and this project aims to make that clear. It would also be helpful to see graphs of how much you have lost/gained over time.

Using Deno because it's awesome. Can do backend, frontend, database and server hosting all in one.

## Supported Platforms

Raise an issue or email me at <william@spongberg.dev> if you want to see a platform supported.

- Instagram
  - [ ] Logs for what you've done in other apps (creepy as fuck, see your_activity_off_meta_technologies)
  - [ ] Ads data (how many seen, who's been sold your data)
  - [ ] Info about you (device info, where insta thinks you are)
  - [ ] Topics that you like
  - [ ] Liked/saved posts (no. + graphs)
  - [ ] Posts/comments (no. + graphs)
  - [ ] Message analytics
  - [ ] Logins (where/when, graphs etc)
  - [ ] Followers (stats, e.g. blocked x amount of people)
  - [ ] (more to come)
- TikTok
  - [ ] TODO
- YouTube
  - [ ] TODO
- Facebook
  - [ ] TODO
- Gambling sites
  - [ ] TODO

## Usage Design + Framework

- Upload data to frontend. Choose what features you want to use (e.g. messages, ads, etc).
- Data is processed in the browser (break up into readable files, etc).
- Data is sent to server/API for further processing + analytics.
- Data is returned to frontend for display.
- User can also download the data in a more readable format if they want.

## Future Features

- May have to make this a paid service to cover costs for outgoing API calls from server to e.g. the YouTube API. Would only become paid if too many requests are made, and would require a login.
- User can call API with data. Would prefer not to store data on server for obvious privacy reasons. Most likely this would be a paid feature - free users would have to upload data to frontend. Could also allow querying, but this would require data to be upload to server.
- Would like to automatically grab data for users rather than forcing them to go through the ardous process of downloading their data from each platform themselves. Meta and TikTok do seem to already support this, but I'll have to look into it further. (<https://developers.facebook.com/docs/data-portability/>, <https://support.tiktok.com/en/account-and-privacy/personalized-ads-and-data/requesting-your-data>)
- Work with governments to make it easier for users to get their data from companies. This is a privacy issue, and should be taken seriously. Companies should not be able to hide behind the excuse of "it's too hard to get the data".
- Change title to something more catchy and less basic.
- Use AI to summarise some data. This is a long way off, but would be very helpful.
- Upload data to one point, and let server automatically figure out which platform it's from. Still allow choosing individual platform to upload to in case of bugs.
- etc etc

## Potential Issues

- Privacy issues. This project is all about privacy, so it would be ironic if it had privacy issues.
- Legal issues. I will do my best to make sure this project is legal, but I am not a lawyer.
- Data size issues. Some data files are very large, and may take a long time to process. It might also start to get expensive if I'm not careful and don't enforce data limits.

## Dev Notes

Make sure to install Deno: <https://deno.land/manual/getting_started/installation>

Then start the project:

``` bash
deno task start
```

This will watch the project directory and restart as necessary.

/routes stores all of the routes. Fresh automatically sorts out all the routes and imports them.
(Does not include /routes in the url path)
