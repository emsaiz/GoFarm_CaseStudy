$(document).ready(function() {
    $(".aboutMe").hover(
        //trigger when mouse hover
        function () {
            $(this).animate({
                marginTop: "-=1%",
            }, 200);
        },
    
        //trigger when mouse hover
        function () {
                $(this).animate({
                    marginTop: "0%"
                }, 200);
        }
    ); 
});
    
