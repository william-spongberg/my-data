# my_data

**Author:** William Spongberg

Apps and services online grab, use and sell your data all the time. Thanks to privacy acts, you can now request a copy of all the data they have collected from you.

Unfortunately, this data is very hard to read and understand for the average person. It's hidden behind garbled html code, or thousands of lines of JSON code, or maybe it's just simply too much information to fully understand just at a glance. This project aims to make it easier to understand the data you have collected, and gives helpful analytics and notes on who, for example, Instagram has sold your data to.

I had the initial intention for this project of finding out information on the number of liked and saved posts I have, but after crawling through the disturbingly large amount of information some of these platforms have on me and struggling to understand it all I quickly turned my focus towards privacy and helping the average user understand how much of their personal information gets consumed by these massive conglomerates.

I plan to eventually add support for gambling sites that like to make it hard to see how much you have actually lost/gained. Most gamblers have no idea how much they have lost, and this project aims to make that clear. It would also be helpful to see graphs of how much you have lost/gained over time.

My eventual goal for this project is honestly for it to be picked up and improved upon by governments of the world to be used as a tool every person is entitled to.

> See the [wiki](https://github.com/william-spongberg/my_data/wiki) for more information.

## Supported Platforms

Raise an issue or email me at <william@spongberg.dev> if you want to see a platform supported.

- Instagram
  - [x] Logs for what you've done in other apps (creepy as fuck, see your_activity_off_meta_technologies)
  - [x] Ads data (how many seen, who's been sold your data)
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

## Dev Notes

Make sure to install Deno: <https://deno.land/manual/getting_started/installation>

Then start the project:

``` bash
deno task start
```

This will watch the project directory and restart as necessary.

/routes stores all of the routes. Fresh automatically sorts out all the routes and imports them.
(Does not include /routes in the url path)
