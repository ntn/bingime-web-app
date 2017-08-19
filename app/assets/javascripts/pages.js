// window.onload = function(){
	// const bad = document.getElementById("bad");
	// bad.addEventListener('click', showAPI);
// }

// function showAPI(){
// 	document.getElementById("api").style.display = "";
// }

/* global $ */

$(function() {
  $('a#show_whatever').click(function(event){
    event.preventDefault();
    $('div#whatever').toggle();
  });
});

