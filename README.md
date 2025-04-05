# My Stats

[![Made with Fresh](https://fresh.deno.dev/fresh-badge-dark.svg)](https://fresh.deno.dev)

> See the [wiki](https://github.com/william-spongberg/my_data/wiki) for more
> in-depth information and future ideas/plans.

## Aim

The key focus of this website is to educate people on what data social media companies hold on them.

## Security

Data is stored locally, and processed locally. Nothing is sent to the server -
however this may change for paid plans that want to see analysis across multiple
platforms at once.

## Supported Platforms

- Instagram
  - [x] Logs for what you've done in other apps (creepy as fuck, see
        your_activity_off_meta_technologies)
  - [x] Ads data (how many seen, who's been sold your data)
  - [x] Info about you (device info, where you are)
  - [x] Liked/saved posts (no. + graphs)
  - [x] Posts/stories/comments
  - [x] Logins (where/when)
- TikTok
  - [x] Likes/favourites (no. + graphs)
  - [x] Login history (no. + graphs) 
  - [x] Watch history (no. + graphs)
  - [x] Comments (no. + graphs)

## Idea: Making it profitable

We will be moving to [Deno SaaSKit](https://deno.com/saaskit) in the future to
allow for payments and educational blogs.

_Note that these prices are just placeholders for now - not sure how much this
service will cost once scaled._

- Free tier: what is my data worth + ad insights
- Premium: one-time payment of $20 AUD, fun insights (should this maybe be named
  the fun tier?)
- Pro: monthly payment of $10 AUD, professional insights

| Feature                                                                    | Free | Premium | Pro |
| -------------------------------------------------------------------------- | :--: | :-----: | :-: |
| What is my data worth? (in dollars and cents)                              |  ✅  |   ✅    | ✅  |
| Who has been sold my data? (list of companies that have your data)         |  ✅  |   ✅    | ✅  |
| Advertisement insights (how many ads have I seen?)                         |  ✅  |   ✅    | ✅  |
| External tracking (has this platform seen what I've done outside the app?) |  ✅  |   ✅    | ✅  |
| Total time spent on the app (how do you compare to other users?)           |  ❌  |   ✅    | ✅  |
| Number of liked/saved posts                                                |  ❌  |   ✅    | ✅  |
| Number of posts and comments                                               |  ❌  |   ✅    | ✅  |
| Insights across all platforms at once                                      |  ❌  |   ❌    | ✅  |
| Unlimited data limits                                                      |  ❌  |   ❌    | ✅  |
| SQL query your data                                                        |  ❌  |   ❌    | ✅  |
| [FUTURE] Link data analysis to platform directly (instant insights)        |  ❌  |   ❌    | ✅  |
