---
title: HTTP Cache Directives: Explained with history
date: 2018-05-18
layout: Post
---

# HTTP Cache Directives: Explained with history

The other day I was trying to understand about different HTTP Cache headers and
how it’s working. The answers I found was varied for different people. So I
spend some hours reading some various articles and made this one. Correct me if
I am wrong. Most of the ideas I got is from below article which is an archived
blog.

Let’s say you hosted a website called ourfamily.com and you created the site in
1996. (When HTTP 1.0 introduced) Let’s say the site will let you log in with
your username and password and will show you a beautiful family photo. ie, in
your browser, you’ll enter your username and password and browser will send this
**request** to the server which is hosted somewhere and the server will give you
a **response** telling whether you are authorized or not to see the image.<br>
Now, what’s cache had to do with all this? The internet is slow that the browser
and server have to talk to each other about everything and it can’t take that
much time and bandwidth. So for most of this talking, if the browser already
knows the answer, it shouldn’t ask the question to the server. Just like,
whenever you refresh the family photo page, the browser doesn’t have to wait or
ask the server for the same photo to be sent through the network.<br> But in
this big world, when browser and server sitting on two different continents,
this talking is more expensive. And if the number of pictures is high and
everyone may want the same picture, like in the case of a newspaper, talking
cannot be this much expensive. So people installed some small intermediate
servers. The browser will ask for information to these proxies which will get
the information from the original server first, and whenever the second request
comes, maybe from same browser or another browser for the same information, they
will give the information instantly without going back to the original servers.
This added an extra speed to the communication between servers and browsers.<br>
But this architecture has some security issues also. These Proxy Caches aren’t
supposed to cache everything browser and server talking because they may be
passing some sensitive information also, like username and passwords. These
talking are based on the HTTP and we could control caching by setting some
headers on the HTTP **request**s and **response**s.

1.  `Pragma: no-cache`

We *had* `Pragma: no-cache`in HTTP 1.0 **requests** (Not response). This is for
telling intermediate cache ‘not to cache this request’ maybe this communication
contains sensitive information like username and passwords or caching this had
no advantage for a proxy-cache.

2. `Expires`

Another HTTP 1.0 header to tell browsers when the page will be expired. This is
a **response** directive. ie the server set this header in the **response**.
Basically, by this header, browser can know that how long this information is
intact. Browser and Proxy caches can cache it in their memory.

Then HTTP 1.1 came out in 1997 with upgraded headers.

3. `cache-control: public`<br> Let’s say you have a public page, like a login
page. or a public resource, like family logo which can be stored by any cache,
browser or not. So most of the time people try to get the resource will hit the
cache and won’t direct hit the server and we get a performance boost.

4. `cache-control: private`

`cache-control: private` tells the proxies not to cache. Like your family photo
page of site *ourfamily.com*. You wouldn’t want anyone else to see this photo
but your browser can cache this photo for performance and save bandwidth and
time.

5. `cache-control: no-cache`

Now let’s say you changed the login page design at the time of the New year. The
users should be seeing new page instead of old one. But you already set the page
as public and the browser’ll only show that instead of your new one. Now we’ll
have the most badly named spec (I think) in cache directives to rescue. We could
use `cache-control: public; no-cache;` for the login page. no-cache will tell
the browser that ‘Hey, you can cache this page, but before you show this to the
user, just let the server know. If server changed the page server’ll give you
the updated one.` Now we can save bandwidth instead of downloading the new page
every time.

This naming is so bad that some browsers even start to implement cache
architecture that if `no-cache` is present, they won’t use the cache at all,
instead, they will download a fresh copy from server every time.

5. `cache-control: no-store`

Now you want a completely no-cached page. Like some page where your family
business revenue is shown And you know `no-cache` is not the answer. `no-store`
to the rescue. It tells the caches (both browser and other caches) not only “not
to cache the page”, but also “not to even store the page in its cache folder”.
So it’s safe to use `cache-control: private,no-cache,no-store` for highly
sensitive and fresh pages.

Now we want to cache the background image of the site for 1 week. We’re not
going to change it so often and even if you change it, it’s okay some user see
the old background for some time. Because it’s not important. We could add the
`max-age` in the header. `max-age` is like the old `expires` header telling the
browser, ‘Hey you can cache this until the max-age is expired, after you’ve to
revalidate the asset from server.’ So what’ll happen you have a `max-age=0`
header? It’ll revalidate every time with server for each request. Pretty much
same as `no-cache`. (?🤨)

> Using `max-age `instead of `expires` is better. Because `max-age` is relative
> time(How long the cache should stay) where `expires` is an absolute one which
will take a date as the value, when cache should be stale. (It’s hard to set the
date because the time should be same on server and client and we should keep
updating this date more often.)

This is all in theory. Different browsers and proxy servers can implement or
honour this headers or not do anything. Just like `no-cache` for some browsers.
And some browsers may show stale responses if the network is down and all. If
you want to revalidate the cache every time no matter what, we could achieve
that with an extra header value called `must-revalidate` . This will tell the
browser in any circumstances browser should revalidate the resource. There’s a
`proxy-revalidate` value too but for proxy servers.

*****

**Browser Validators**<br> Now, we’ve talked about re-validating the resource by
contacting server. How will the browser know that the resource is still valid?
We’ve two ways to do that. `ETag` and `Last-Modified` headers are used as these
validators. Every resource are send with these values from the server. And when
a browser wants to validate whether this is fresh/stale it’ll send a request
with header`if-modified-since` with a value of `last-modified` OR a header named
`if-none-match` with an `etag` value. And if those matches, the browser could
tell that resource is still not changed and can continue to use that.

*****

I think I kind of explained these things. I got the information from different
articles and talked about here. Please let me know if I am incorrect or things
have been changed over time. Thank you.

* [Web Development](https://medium.com/tag/web-development?source=post)
* [Http Request](https://medium.com/tag/http-request?source=post)
* [Http Cache](https://medium.com/tag/http-cache?source=post)
* [Cache](https://medium.com/tag/cache?source=post)

From a quick cheer to a standing ovation, clap to show how much you enjoyed this
story.

### [Asim KT](https://medium.com/@KTAsim)

Front End dev | MESCIAN |Proud Indian | Music maniac | Being straight
