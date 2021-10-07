---
title: An introduction to Puppeteer and Headless Chrome
date: '2017-09-04'
description: Headless Chrome is a newly released feature in Google Chrome. Learn what it is and how you can use it!
published: true
---

_Note: This post was also published on
[dev.to](https://dev.to/mohamed3on/an-introduction-to-puppeteer-and-headless-chrome)_

---

[Headless Chrome](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md) is a newly released feature in Chrome 59 (Linux and Mac) and Chrome 60 (Windows). It allows for programmatically testing a website without launching a browser window, thus making automated tests far easier, which in turn gives you more confidence to change your app without breaking anything.
##First of all, what is 'headless'?
Headless basically means 'without a GUI', which means in Chrome's case you'd be working with a programmable API, not with a GUI that you can interact with. A good example of Headless mode is when you're dealing with servers using SSH, and doing all the interactions using shell commands.
##Making use of Headless Chrome with Puppeteer
[Puppeteer](https://github.com/GoogleChrome/puppeteer) is an npm Package made by the Chrome team to easily interact with Headless Chrome with a convenient, high-level API.
It is a newly released module that is very similar to PhantomJS or Selenium, but it differs by using the latest versions of Chrome and using headless mode as a default.
##What kind of tests can you run with Headless Chrome and Puppeteer?
A good use case for Puppeteer is automated tests for your UI, by taking screenshots of it or exporting it to a PDF.
Since headless Chrome gives you the ability to do anything a normal browser can, you can use it to automate an entire use case of your system (End to end tests). For example, user log-ins, form submissions, button clicks, page navigation, and more.
You can also use Puppeteer to periodically scrape websites, and store the relevant info you want to extract in a database, which is similar to what you could do with Python's [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) package.
##Wrapping up
All in all, Puppeteer is a package that allows you to deal with web pages programmatically in an automated fashion, whether it is to take screenshots of a web page, or exporting it to PDFs, or clicking buttons and filling forms, or extracting/scraping the content of pages for later inspection. It offers you a very powerful API that allows you to do whatever you can do in a full-fledged browser, without needing the browser.
If you're interested and want to know more about Headless Chrome, check [this article](https://developers.google.com/web/updates/2017/04/headless-chrome) out.
If you want to see examples of how to use Puppeteer, check [here](https://github.com/GoogleChrome/puppeteer/tree/master/examples).
