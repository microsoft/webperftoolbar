// ==UserScript==
// @name         Inject My Perf Toolbar into pages
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        */*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var initFunc = function() {
        var s = document.createElement("script");
        s.setAttribute("src", "http://127.0.0.1:8080/dist/bundle.js");
        s.setAttribute("defer", "true");
        s.onload = startFunc;
        document.body.appendChild(s);
    };

    var startFunc = function() {
        (new PerfToolbar.Toolbar([
            /** Configure this to include the panels you need */
            {
                panelConstructor: PerfToolbar.NavigationTimingsPanel,
                config: {
                    goalMs: 25
                }
            },
            {
                panelConstructor: PerfToolbar.ResourceTimingsPanel,
                config: {}
            }
            /** End configuration */
        ])).render();
    };

    setTimeout(initFunc, 5000);

})();