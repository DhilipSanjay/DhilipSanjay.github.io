---
layout: default
title:  "Protect Your Private Email Addresses"
date:   2021-07-25 03:00:00 +0000 
categories: privacy email osint git github bitbucket 
---

If you are using [git](https://git-scm.com/) and any code hosting platform like [Github](https://github.com/), [Bitbucket](https://bitbucket.org/), etc. to upload/commit your code, then you might be leaking your private email addresses. This article focuses on how exactly the private email addresses are being leaked and what you can do to protect them!


## Git CLI setup

While setting up **git** for the first time, you must have used these commands to set your email address and user name:

```bash
git config --global user.email <your-email>
git config --global user.name <your-name>
```

You can use any email address. But, you must have used an **email address** that is connected to your GitHub account. 

<div class="note set-aside blue" markdown = "1">
The email address linked with Github ensures that commits are attributed to you and appear in your contributions graph.
</div>

---

## Git commits leak your email

Now that you have setup the Git CLI, you must have committed your code and pushed it to a public repository, all the **git commits** will have the following information:

```
    - Commit Hash
    - Author name <Email Address>
    - Date and time
    - Commit Message
```

![Git Commits](/assets/post-images/2021-07-25-protect-your-private-addresses/git-commits.png)

Even though the Web interface of Github doesn't show the private email address, one can clone the public repository and run **git log** to view the commit history and there your private email addresses are leaked!

- To get all the emails from **git log**, you can use this one-liner (in Linux): 

```bash
# STEPS:
  # 1. Clone the github repository
  # 2. cd into the cloned repository
  # 3. Run the one-liner:
git log | grep Author | cut -d ":" -f2 | sort -u | awk '{print $NF}' | sed -r 's/<// ; s/>//'
```

---

## How to Protect?

To protect the private email addresses from leaking in your commits, you must configure **Github settings** as well as **Git CLI**.

<blockquote class = "quote">
<p class="quote-text">The past cannot be changed, edited or erased; it can only be accepted!</p>
<p class="quote-text quote-credit">Random Git User😜</p>
</blockquote>


### 1. Github Settings

Github provides two options to protect your private email addresses from leaking. Go to [Your Profile -> Emails](https://github.com/settings/emails) and enable these options:

![Github Settings](/assets/post-images/2021-07-25-protect-your-private-addresses/github-settings.png)


### 2. Changes in Git CLI

By enabling the second option in Github settings, any further commit which contains your *private email address will be blocked*! Now you have to configure the Git CLI to not include your private email address. 
- You can use any random email id like **email@example.com**. But the problem is that, your commits won't be attributed to you!
- Alternatively, Github provides a **dummy email id** (highlighted in the previous image), which ensures that commits are attributed to you and appear in your contributions graph.

<div class="note set-aside blue" markdown = "1">
Any commits you made prior to changing your commit email address are still associated with your previous email address. You must delete your whole commit history to get rid of that email address.
</div>

Change the email address using the git command:

```bash
git config --global user.email <dummy-github-email>
```

---

## References

- [Github Docs - Managing email preferences](https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/managing-email-preferences)
- [5.8 Million Unique Commit Emails Extracted](https://github.com/cirosantilli/all-github-commit-emails)
- [Stackoverflow - Does Git publicly expose my email address?](https://stackoverflow.com/questions/897586/does-git-publicly-expose-my-e-mail-address)