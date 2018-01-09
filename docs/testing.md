# How to test the toolbar across the web

## Setup
- Install [Tampermonkey](http://tampermonkey.net/) in your browser.
- Add the user script in `\injectDemoToolbar.user.js` to Tampermonkey. You can tweak this file as necessary to configure the toolbar to your liking.
- Install and run Fiddler.
- In the FiddlerScript pane, find the `OnBeforeResponse` function and add `oSession.oResponse.headers.Add("Timing-Allow-Origin", "*");` to the function. (This adds a header that allows timings of all resources, normally restricted to same origin. Because the demo is served from a different origin, it can't normally access timings.)
- Run `npm run demo` to start the web server that provides the bundle.js file.
