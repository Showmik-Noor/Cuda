$(document).ready(function(){
// MIX IT UP 
var containerEl = document.querySelector('.container');
var mixer = mixitup(containerEl);

// Way POINT 
$(".start-nav").waypoint(function(direction){
    if(direction == "down"){
        $("nav").addClass("sticky");
        $("a").removeClass("active");
    }
    else{
        $("nav").removeClass("sticky");
    }
}
);
});

function opennav(){
    document.getElementById("mbl-nav").style.width = "100%";
}
function closenav(){
    document.getElementById("mbl-nav").style.width = "0%";
}