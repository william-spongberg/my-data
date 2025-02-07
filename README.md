# What is my data worth?

> See the [wiki](https://github.com/william-spongberg/my_data/wiki) for more in-depth information and future plans.

## Aim

Key focus is education, and for helping people understand how to control their data. Any paid plans are only for fun insights or people who really like to delve into the nitty-gritty.

To support the focus in education, there will be helpful links attached to each graph describing what it means, the dangers surrounding this information being in the wrong hands and how you can prevent this information from being shared.
There will also be links to solutions like [delete.me](https://joindeleteme.com/) and [proton.me](https://proton.me/) (likely paid links).

## Making it profitable

_Note that these prices are just placeholders for now - not sure how much this service will cost once scaled._

- Free tier: what is my data worth + ad insights
- Premium: one-time payment of $20 AUD, fun insights (should this maybe be named the fun tier?)
- Pro: monthly payment of $10 AUD, professional insights

| Feature | Free | Premium | Pro |
|---------|:----:|:-------:|:---:|
| What is my data worth? (in dollars and cents) | ✅ | ✅ | ✅ |
| Who has been sold my data? (list of companies that have your data) | ✅ | ✅ | ✅ |
| Advertisement insights (how many ads have I seen?) | ✅ | ✅ | ✅ |
| External tracking (has this platform seen what I've done outside the app?) | ✅ | ✅ | ✅ |
| Total time spent on the app (how do you compare to other users?) | ❌ | ✅ | ✅ |
| Number of liked/saved posts | ❌ | ✅ | ✅ |
| Message insights (number of messages sent/received, favourite people, etc) | ❌ | ✅ | ✅ |
| Insights across all platforms at once | ❌ | ❌ | ✅ |
| Unlimited data limits | ❌ | ❌ | ✅ |
| SQL query your data or export as csv | ❌ | ❌ | ✅ |
| [FUTURE] Link data analysis to platform directly (instant insights) | ❌ | ❌ | ✅ |

## Supported Platforms

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

## Developers

### Getting Started

First install [Deno](https://deno.land/manual/getting_started/installation)

Then to launch the project:

``` bash

git clone https://github.com/william-spongberg/my_data.git

cd my_data

deno task start
```

This will download and then launch the website locally, restarting the page whenever a change is made to the code

### Dev Notes

 - /routes stores all of the routes. Fresh automatically sorts out all the routes and imports them.

## Contributors

**William Spongberg**  
[![GitHub](https://img.shields.io/badge/GitHub-%40william--spongberg-blue?style=flat-square&logo=github)](https://github.com/william-spongberg)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-William%20Spongberg-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/william-spongberg/)  

---

[![Made with Fresh](https://fresh.deno.dev/fresh-badge-dark.svg)](https://fresh.deno.dev)
