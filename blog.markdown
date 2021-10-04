---
layout: default
title: Blog
permalink: /blog/
---
## Why Blogs?
Blogs are a way of expressing one's views, interests and thoughts. We all are social beings and hence we need some way to express our thoughts and also expect to be appreciated. The two mains reasons for me to write blogs:

* We do a lot of interesting stuff everyday, but we don't remember everything. And sometimes, we feel like we didn't do anything at all. This leads to low self-esteem and self-confidence. People can ask, 'Why don't you maintain a diary and write everything in that?'. This leads me to the second reason.
* We spend our time in doing something, which itself is some kind of a learning experience. Jotting down these experiences _(it can be about movies, books, coding or any new skills)_, will be beneficial for others and also yourself _(P.S: As I said, you won't remember everything you learn or experience)_.

<div class="note set-aside blue" markdown = "1">
I got this inspiration from [Julia Evans](https://twitter.com/b0rk){:target="_blank"} & [Daniel Meissler](https://twitter.com/danielmiessler){:target="_blank"}.
</div>

<blockquote class = "quote">
<p class="quote-text">To err is human; to forgive divine</p>
<p class="quote-text quote-credit">Alexander Pope</p>
</blockquote>

Check out my articles and write-ups:
<div class="box fade-in categories">
  <a target="_blank" href="https://dhilipsanjay.gitbook.io/home/">
    <div class="category-box">
        <img src="/assets/img/gitbook.png"  alt="gitbook-logo">
        Gitbook - Blog
    </div>
  </a>
  <a target="_blank" href="https://dhilipsanjay.gitbook.io/ctfs/">
    <div class="category-box">
        <img src="/assets/img/ctfs.png"  alt="ctfs-logo">
        CTF Write-ups
    </div>
  </a>
  <a target="_blank" href="https://dhilipsanjay.medium.com/">
    <div class="category-box">
        <img src="/assets/img/medium.png"  alt="medium-logo">
        Medium
    </div>
  </a>
  <a target="_blank" href="https://auth.geeksforgeeks.org/user/dhilipsanjay1/articles">
    <div class="category-box">
        <img src="/assets/img/gfg.jpg"  alt="gfg-logo">
        GeeksforGeeks
    </div>
  </a>
</div>

<hr>

<div class="header">
<h2>Recent posts</h2>
</div>

<div class="recent posts">
{% for post in site.posts %}
  <div class = "post">
    <a href="{{ post.url }}">
    <h3>{{ post.title }}</h3>
    </a>
    <p class="blogdate">{{ post.date | date: "%d %B %Y" }}</p>
  </div>
  {% endfor %}

</div>
