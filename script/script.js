$(function(){
    $("div#loginFunction button").click(function(){
        $("#loginFunction button").removeClass("selected");
        $(this).addClass("selected");

        var dataLink = $(this).attr("data-link");
        console.log(dataLink);
        $("div.tabContents").css({
            "display" : "none"
        });
        $("div#" + dataLink).css({
            "display" : "block"
        });
    });
});