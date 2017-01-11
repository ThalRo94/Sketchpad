var dimension = 16

// creates grid
var createGrid = function(){
    $(document).ready(function() {
        for (var i = 1; i <= dimension; i++) {
            $("tbody").append("<tr></tr>");
        };
        for (var i = 1; i <= dimension; i++) {
            $("tr").append("<td></td>");
        };
         $('td').append("<div class='pixel'></div>");
    });
}
createGrid();

// hover effect
var hover = function(){
    $(document).ready(function () {
        $("div .pixel").on("mouseenter",function() {
            $(this).css("background-color", "black");
        });
    });
};
hover();

// rainbow hover effect
var rainbow = function(){
    $(document).ready(function(){
        $("div .pixel").on("mouseenter",function() {
            $(this).css('background-color', 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')');
        });
    });
};

// clear button
$(document).ready(function(){
    $("#buttonClear").click(function(){
        $("div .pixel").css("background-color", "lightgrey");
    });
});

// Resize grid button
$(document).ready(function(){
    $("#buttonResize").click(function(){
        dimension = prompt("Select a size between 2 and 64:");
        $("tbody").empty();
        createGrid();
        hover();
    });
});
 
 // Rainbow toggle
 $(document).ready(function(){
     $('input').on('click',function () {
        if ($("#rainbow").is(':checked')) {
            rainbow()
        } else {
            hover()
        }
    });
 });

