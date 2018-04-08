---
title: The Story of my portfolio
date: 2018-04-08
layout: Post
hero: https://cdn-images-1.medium.com/max/2000/1*iDSQ1eFiGPDrKSAsEaWpEA.png
---

# The Story of my portfolio

Everyone needs an online domain of their own in these days.

It was like years back, I started feeling like getting a domain with my name on
it and setting up a page to showcase things about me. At that time I was excited
about typing my name in the URL bar and a `.com` where I can see my photos and
my name there. After I started my front end career 3 years back I understood the
importance of that portfolio also. It highly affects your presence in the world
of wide web.

### The beginning

Some months back I bought the domain from BigRock. Of course, asim.com was not
available and asim.me was way expensive and I settled with asimkt.com.

Then I started coding. I knew then this should be a place where I write things,
my photos from Instagram (some not so good ones) should come and the first
result whenever a person searches for ‘Asim KT’ in the Google.

I went for static site generators so that I could write the blog from the
repository and it will come up in my site good without touching my code. I went
through some generators like Jekyll and all and failed miserably.

### Netlify & Victor Hugo

I was using Netlify at the moment for my side projects like
[Zpeed](https://www.zpeed.in/) and [Image Baker](https://www.img-bak.in/)* *and
it’s a great product for hosting static sites. It was one of their weekly mail
where they talked about their static site generator called [Victor
Hugo](https://github.com/netlify/victor-hugo) and I decided to use it. I created
a new project and did some style changes and I created this:

![](https://cdn-images-1.medium.com/max/2000/1*iDSQ1eFiGPDrKSAsEaWpEA.png)

I should tell that I stumbled upon some bottlenecks where I was stuck due to
limited documentation and number of people who actually used V.Hugo and I
managed to solve them at the time. I thought about writing a blog about the
process but I forgot to note down it. 😣

Anyway, this was (is at the time of writing) my site for some months. There were
some issues with V.Hugo:

1.  Limited documentation and support
1.  Little hard to implement (For me at least)
1.  Not so active project. *Netlify* is busy making their service awesome and may
not get time for the generator.
1.  Not using any frameworks. Coding is hard

I understood this because I kind of started searching for other approaches when
I find [Phenomic](http://phenomic.io/).

### Phenomic

*Phenomic* is yet another static site generator which used React for the front
end. Basically, we can use any other framework, but they only support react now!

I created a branch for the `*phenomic*` and followed their documentation for a
simple site. As usual, my laziness struck me mainly because I already had a live
site going on. But I completed the G**etting started** guide and got a text-only
site which had lists of blogs and next-previous buttons. And I stopped.

A Few days back I ran the project again and *I was LOST. *I didn’t remember what
I was doing, and what’s the next step. I had to read the same documentation
again to start. But what happened was another thing. I saw another code snippet
where I could generate sample phenomic site with some styles from the command
line itself. Which follows like:

    npm install phenomic
    ./node_modules/.bin/phenomic setup

which will create a sample site like this.

Then I added my contents, changed my footer, changed fonts and all. You can see
the site at this time
[here](https://5ac9b04edf99536c3c4392c1--asimkt.netlify.com/).

I’m going to work on the styling more. I’ll update this article after that.

Thanks for reading.
