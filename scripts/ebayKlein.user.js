// ==UserScript==
// @name         Ebay-kleinanzeige better search
// @name:de      Ebay-Kleinanzeigen bessere suche
// @description  Zeigt suchergebnisse im Grid statt untereinander, kein scrollen mehr
// @description:de Zeigt suchergebnisse im Grid statt untereinander, kein scrollen mehr
// @version      0.01
// @grant        none
// @icon         http://www.google.com/s2/favicons?domain=www.ebay-kleinanzeigen.de
// @license      MIT
// @include      https://www.ebay-kleinanzeigen.de/s-*
// @exclude      https://www.ebay-kleinanzeigen.de/s-anzeige/*
// @exclude      https://www.ebay-kleinanzeigen.de/s-Bestands*
// @updateURL
// @downloadURL

// ==/UserScript==


function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

// doesnt work :S
addGlobalStyle('.srpimagebox:hover + .preview { display:block; ! important; }');

// key is float:left & margin:0px; visibi
addGlobalStyle('.ad-listitem {width: 200px;height:200px;float: left;margin: 0px 0;}');




// forgot what this does sorry
addGlobalStyle('.l-splitpage-flex > .l-splitpage-content{width:auto;}');


// give the content more space
addGlobalStyle('.site-base--left-banner, .site-base--right-banner{width:0%;}');
addGlobalStyle('.site-base--content{width:95%;}');
addGlobalStyle('.l-page-wrapper, #site-footer.l-page-wrapper{width:100%;}');
addGlobalStyle('.a-padded.l-container-row{visibility: hidden;height: 0px;padding:0px;margin:0px;');


// hide adds :) - CSS is injected below
addGlobalStyle('.hide-add{visibility: hidden;width: 0px;');

// allow jqery to be used here
var $ = unsafeWindow.jQuery;




// for some reason we have to wait some ms 
setTimeout(function(){
  
  // Load all the images; remove the lazyload effectively. 
	$(".lazyload-item").trigger("appear");
  
  // tag all the ads with the hide-add class (see above) - directly injecting css didnt work for some reason
	  $('.ad-listitem:not(:has(article))').addClass("hide-add");

}, 500);



