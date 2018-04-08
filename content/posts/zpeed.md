---
title: Zpeed - My first PWA
date: 2017-03-12
layout: Post
hero credit: https://www.flickr.com/photos/igotz/15669216853/
hero: https://farm8.staticflickr.com/7479/15669216853_aa8e70eae1_o.jpg
---

Well, I was hearing about these cool Progressive Web Apps (PWA for short) for
sometimes. I stumbled upon them in some emails and blogs. So I thought about
making a one just out of curiosity. So that I could learn them along the way.

The first step was about ‘what’. What to create? In this vast universe of
JavaScript, everything we think of already created by some good men and most of
the time we use them without even thanking them. The other drive for me to
create a PWA was the same feeling that I never gave something back to the
community or to the help I got from other fellow developers. I always tried to
help in StackOverflow but it’s an ongoing process which I’m very slow nowadays.

I needed a very simple tool/app which should help at least one person. One of my
friends (who is a great Android dev) told me that he created an Android app to
check the real-time speed of a user in his smartphone and he got 100+ downloads
even though the app was listing way below when you search ‘speedometer’ in
Google Play store. This got me thinking that ‘checking your speed is a very
rarely event in a person’s daily life’. And downloading an app for just the same
purpose is an overhead. So why shouldn’t I create a one so that a user could
just check their speed by visiting an URL?

I was under the impression that, if I got the `lat `and `long` of user’s
position and it changes over time, I could calculate the speed of the user and
show that to him. But turn’s out that it was way better easy and since the
`GeoLocation API` of JavaScript returns the speed of the user in `m/s`
already.So the picture was clear now. I created a sample webpage and it worked
in `localhost` perfectly and I uploaded to [Netlify](https://www.netlify.com/).
The core code was like:

    navigator.geolocation.watchPosition(
       function(d){
         zpeed.writeSpeed(d);
       },
       function error(err) {
         zpeed.showError(err)
       }, {
         enableHighAccuracy: true,
         maximumAge: 0
    });

Since browsers are started to block geoLocation requests in non-secure domains,
I bought a domain named `zpeed.in` and secured the page with [Let’s
Encrypt](https://letsencrypt.org/).

> The one thing I would like to mention that the Netlify’s awesome features which
> helped me and a thousand of other developers to ease their development workflow.

So I got an MVP within some hours.

The next step was to convert this normal app to a PWA. So I went back to [Google
documentation](https://developers.google.com/web/progressive-web-apps/) and
started working. I largely copied and made tweaks to the [Google Airhorn
App](https://github.com/GoogleChrome/airhorn) accordingly. And again without
much hassle, I converted the [Zpeed](https://www.zpeed.in/) to a PWA which gets
me the [point 100/100 in lighthouse
report](https://googlechrome.github.io/lighthouse/viewer/?gist=3f64e9e86e2321e98d0a9b94a80586c5).
(Which I’m really proud of!)

<span class="figcaption_hack">Lighthouse report for Zpeed.in</span>

I think there are many areas to improve in [Zpeed](https://www.zpeed.in/) like
UX and troubleshooting the issues and all. Still, I think it’s a good app now.
Currently, I’m working on the SEO side of the app, since it’s not showing in
Google search results for queries like `speedometer online` and `check my speed`
etc. If you got any points to improve the search results presence please let me
know.
