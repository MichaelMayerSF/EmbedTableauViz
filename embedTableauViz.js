// ==UserScript==
// @name         Insert Tableau View into Website
// @namespace    http://tampermonkey.net/
// @version      2025-09-01
// @description  Insert a tableau viz into a client website for demos
// @author       Michaël Mayer
// @match        https://www.google.com/
// @icon         https://www.google.com/s2/favicons?domain=force.com
// @grant        none
// ==/UserScript==

const classOrIdName = 'btn-group';
const tableauViz = "<tableau-viz id='tableau-viz' src='https://dub01.online.tableau.com/t/juliensedemo/views/GasNetworkPerformance_v2025_1/Safety' width='1846' height='1414' hide-tabs toolbar='bottom' ></tableau-viz>";
const tableauScriptURL = 'https://dub01.online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js';

(function() {
    let script = document.createElement('script');
    script.type = 'module';
    script.src = tableauScriptURL;
    document.head.appendChild(script);

    setTimeout(() => {
        let elements = document.getElementsByClassName(classOrIdName);
        let element;
        if(elements.length>0) {
            element = elements[0];
        } else {
            element = document.getElementById(classOrIdName);
        }
        if(element) {
            element.innerHTML += tableauViz;
        }
    }, 500);

})();