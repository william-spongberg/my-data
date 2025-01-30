# my_data

Apps and services online grab, use and sell your data all the time. Thanks to privacy acts, you can now request a copy of all the data they have collected from you.

Unfortunately, this data is very hard to read and understand for the average person. It's hidden behind garbled html code, or thousands of lines of JSON code, or maybe it's just simply too much information to fully understand just at a glance. This project aims to make it easier to understand the data you have collected, and gives helpful analytics and notes on who, for example, Instagram has sold your data to.

I had the initial intention for this project of finding out information on the number of liked and saved posts I have, but after crawling through the disturbingly large amount of information some of these platforms have on me and struggling to understand it all I quickly turned my focus towards privacy and helping the average user understand how much of their personal information gets consumed by these massive conglomerates. I do honestly believe that educating the public is of the upmost importance, especially for children coming into this new world of data flowing and being sold and used to addict everywhere.

I plan to also add support for gambling sites that like to make it hard to see how much you have actually lost/gained. Most gamblers have no idea how much they have lost, and this project aims to make that clear. It would also be helpful to see graphs of how much you have lost/gained over time.

My eventual goal for this project is honestly for it to be picked up someday and turned into a wide-spread and readily available tool that everyone is entitled to. I also plan to incorporate plenty of educational sections to this project surrounding what certain data points mean, and how you compare to everyone else.

> See the [wiki](https://github.com/william-spongberg/my_data/wiki) for more information.

## Supported Platforms

Raise an issue or email me at <william@spongberg.dev> if you want to see a platform supported.

- Instagram
  - [x] Logs for what you've done in other apps (creepy as fuck, see your_activity_off_meta_technologies)
  - [x] Ads data (how many seen, who's been sold your data)
  - [x] Info about you (device info, where you are)
  - [x] Liked/saved posts (no. + graphs)
  - [ ] Posts/stories/comments (no. + graphs)
  - [ ] Logins (where/when, graphs etc)
- TikTok
  - [ ] TODO
- Facebook
  - [ ] TODO
- YouTube
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

## Contributors

William Spongberg
[@william-spongberg](https://github.com/william-spongberg)
[LinkedIn](https://www.linkedin.com/in/william-spongberg/)
