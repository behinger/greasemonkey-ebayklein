// ==UserScript==
// @name         Ebay-kleinanzeige better search
// @name:de      Ebay-Kleinanzeigen bessere suche
// @description  Zeigt suchergebnisse im Grid statt untereinander, kein scrollen mehr
// @description:de Zeigt suchergebnisse im Grid statt untereinander, kein scrollen mehr
// @version      0.2
// @grant        GM_log
// @icon         http://www.google.com/s2/favicons?domain=www.ebay-kleinanzeigen.de
// @license      MIT
// @include      https://www.ebay-kleinanzeigen.de/s-*
// @exclude      https://www.ebay-kleinanzeigen.de/s-anzeige/*
// @exclude      https://www.ebay-kleinanzeigen.de/s-Bestands*
// @updateURL	   https://raw.githubusercontent.com/behinger/greasemonkey-ebayklein/main/scripts/ebayKlein.user.js
// @downloadURL  https://raw.githubusercontent.com/behinger/greasemonkey-ebayklein/main/scripts/ebayKlein.user.js
// @require      http://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @run-at      document-idle

// ==/UserScript==


// allow jqery to be used here
//var $ = unsafeWindow.jQuery;
this.$ = this.jQuery = jQuery.noConflict(true);
//var $  = window.jQuery;
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
//addGlobalStyle('.srpimagebox:hover + .preview { display:block; ! important; }');

// key is float:left & margin:0px; visibi
// make the adds next to eachother
addGlobalStyle('.ad-listitem {width: 200px;height:150px;float: left;margin: 0px 0;}');

// make everything on top the image
addGlobalStyle('.aditem-main {position:absolute;	}');

// remove the description (potential add it on hover?
addGlobalStyle('.aditem-main--middle--description {visibility:hidden;height:0px;margin:0;padding:0;	}');

addGlobalStyle('.aditem {padding:0;}');

// make the title white/outlined
addGlobalStyle('.aditem-main--middle .text-module-begin{color:white;-webkit-text-fill-color: white;-webkit-text-stroke: 1px;}');


// ********** WHERE WHEN ****************
// make the where / when on top absolute
addGlobalStyle('.aditem-main--top {margin-top:50%;position:absolute;visibility:hidden;}');

// add hover function
 $(".ad-listitem").hover(function() {
       $('.aditem-main--top').addClass("hover"); 
    }, function() {
       $('.aditem-main--top').removeClass("hover");
    });
addGlobalStyle('.aditem-main--top.hover {position:absolute;background:white;visibility:visible;}');
               

//************* PRICE *************
addGlobalStyle('.aditem-main--middle--price-shipping--price {color: green;-webkit-text-fill-color: white;-webkit-text-stroke: 1px;}');



addGlobalStyle('.aditem-main {height:100%;}');




// more than 3 items in a row
addGlobalStyle('.l-splitpage-flex > .l-splitpage-content{width:auto;}');


// give the content more space
addGlobalStyle('.site-base--left-banner, .site-base--right-banner{width:0%;}');
addGlobalStyle('.site-base--content{width:95%;}');
addGlobalStyle('.l-page-wrapper, #site-footer.l-page-wrapper{width:100%;}');
addGlobalStyle('.a-padded.l-container-row{visibility: hidden;height: 0px;padding:0px;margin:0px;');



// hide adds :) - CSS-class "hide-add" is injected below
addGlobalStyle('.hide-add{visibility: hidden;width: 0px;');

// hide some adds
$('h2:contains("Alternative Anzeigen in der Umgebung")').css('visibility','hidden');
$('span:contains("Weitere Anzeigen in der Umgebung")').closest("div").remove();//css('visibility','hidden');




$(".lazyload-item").trigger("appear");	
$('.ad-listitem:not(:has(article))').addClass("hide-add");


//$(document).ready(function(){

//function myInitFunction() {
setTimeout(function(){
    var res =window.eval('jQuery(".lazyload-item").trigger("appear");');
  console.log(res);
		$(".lazyload-item").trigger("appear");	
  	//$('.ad-listitem:not(:has(article))').addClass("hide-add");

  
  console.log($(".lazyload-item"))
  console.log("lazyload triggered");
  
},500);


console.log("grease fini");
