# How to test the toolbar across the web

## Setup
- Install [Tampermonkey](http://tampermonkey.net/) in your browser.
- Add the user script in `\injectDemoToolbar.user.js` to Tampermonkey. You can tweak this file as necessary to configure the toolbar to your liking.
- Install and run Fiddler.
- In the FiddlerScript pane, find the `OnBeforeResponse` function and the following lines to the function. Because the demo is served from a different origin, it can't normally access timings, so this modifies some headers that make other resources visible. **DON'T BROWSE THE WEB RANDOMLY WITH THESE VALUES SET!** These compromise several of the security features that browsers offer and could open you to up to XSS attacks that would otherwise be blocked.

```javascript
oSession.oResponse.headers.Remove("Timing-Allow-Origin");
oSession.oResponse.headers.Add("Timing-Allow-Origin", "*");
oSession.oResponse.headers.Remove("X-Frame-Options");

var csp = oSession.oResponse.headers["Content-Security-Policy"].Replace("script-src", "script-src *");
oSession.oResponse.headers.Remove("Content-Security-Policy");
oSession.oResponse.headers.Add("Content-Security-Policy", csp);

```

## Testing the Toolbar
- Make sure Fiddler is running to modify the headers.
- Make sure Tampermonkey is enabled and has the user script to inject.
- Run `npm run demo` to start the web server that provides the bundle.js file.

You're all set! The toolbar should be injected into all pages.
