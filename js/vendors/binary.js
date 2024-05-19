// Loading Screen
$(window).on('load', function() {
    $('.overlay_loading').fadeOut(3000 , 
        function()
        {
        $("body").css("overflow" , "auto");
        });
        
});
 
 