$(document).ready(function(){
    $('div#hi1.himg').click(function () {
    	$('#cont').html("Case for pic 1");
    });
    $('div#hi2.himg').click(function () {
    	$('#cont').html("Case for pic 2");
    });
    $('div#hi3.himg').click(function () {
    	$('#cont').html("Case for pic <a href='google.com'>3</a>");
    });
    $('div#hi4.himg').click(function () {
    	$('#cont').html("Case for pic 4");
    });
    $('div#hi5.himg').click(function () {
    	$('#cont').html("Case for pic 5");
    });
    $('#power').click(function () {
    	$('#cont').toggle('.show');
    });
})




/*
// toggle on click
.hide {display: none}

$("a").click(function () {
      $(p).toggleClass("hide");
});

// ajax load page to div
$(function(){
  $(".classloader").click(function(){
    $("#contenthere").load("/includes/about-info.html");
  });
});

// dislay off
$("#id").css("display", "none");

 */