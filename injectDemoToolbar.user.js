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
        var style = document.createElement("style");
        style.innerHTML = "#PTB_buttons {position:fixed;bottom: 0;left: 50px;list-style:none;padding:0;margin:0;z-index: 2147483647; /* we're on top */}#PTB_buttons li {display:inline-block;line-height:1.6em;margin-left:0.5em;padding:0.2em;cursor:pointer;border:1px solid black;border-bottom: none;}#PTB_buttons li:first-child {margin-left:0;}#PTB_frame {position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;padding:0.5em;background:rgba(255, 255, 255, 0.95);z-index:2147483646; /* we're one layer below the top */}#PTB_frame table {margin-top:0.5em;border-collapse: collapse;border-spacing: 0;border: 1px solid black;}#PTB_frame th {font-weight: bold;}#PTB_frame th,#PTB_frame td {border: 1px solid black;padding:0.2em;}#PTB_frame .numeric {text-align: right;}";
        document.body.appendChild(style);

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