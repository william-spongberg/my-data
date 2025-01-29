# my_data

**Author:** William Spongberg

Apps and services online grab, use and sell your data all the time. However, thanks to privacy acts, you can request a copy of all the data they have collected from you.

Unfortunately, this data is very hard to read and understand for the average person. This project aims to make it easier to understand the data you have collected, and gives helpful analytics and notes on e.g. who Instagram has sold your data to.

Also, I plan to add support for gambling sites that like to make it hard to see how much you have actually lost/gained. Most gamblers have no idea how much they have lost, and this project aims to make that clear. It would also be helpful to see graphs of how much you have lost/gained over time.

Using Deno because it's awesome. Can do backend, frontend, database and server hosting all in one.

> See the [wiki](https://github.com/william-spongberg/my_data/wiki) for more information.

## Supported Platforms

Raise an issue or email me at <william@spongberg.dev> if you want to see a platform supported.

- Instagram
  - [x] Logs for what you've done in other apps (creepy as fuck, see your_activity_off_meta_technologies)
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

## Dev Notes

Make sure to install Deno: <https://deno.land/manual/getting_started/installation>

Then start the project:

``` bash
deno task start
```

This will watch the project directory and restart as necessary.

/routes stores all of the routes. Fresh automatically sorts out all the routes and imports them.
(Does not include /routes in the url path)
