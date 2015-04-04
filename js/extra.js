/*jslint white: true */
// function to create the select feeling in portfolio menu
function activeButton(el)  
{   'use strict';    
    $( ".porfolioSection .active" ).each(function(i) {
      $( this ).removeClass( "active" );
    });
    $(el).addClass('active');
}    