$(function(){

    $("ul#gnbMain li.mainLi").mouseover(function(){
        $(this).children("ul").css({
            "display" : "flex"
        });
        $("div#GNB_bg").stop().show();
    });
    $("ul#gnbMain li.mainLi").mouseout(function(){
        $(this).children("ul").css({
            "display" : "none"
        });
        $("div#GNB_bg").stop().hide();
    });

    // tab 버튼에 따른 로그인 방법 전환
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

    //로그인 input 아래 LNB메뉴 mouseover시 css 적용
    $("nav#mainLNB li.lnbLi").mouseover(function(){
        var imgNum = $(this).attr("data-img-num");
        var imgSrc = "images/icon" + imgNum +"_on.png";
        $(this).children("#imgBackground").css({
            "background-color" : "rgb(50, 137, 232)"
        });
        $(this).children("a").css({
            "color" : "rgb(50, 137, 232)"
        });
        $(this).children("#imgBackground").children("img").attr("src", imgSrc);  
    })
    $("nav#mainLNB li.lnbLi").mouseout(function(){
        var imgNum = $(this).attr("data-img-num");
        var imgSrc = "images/icon" + imgNum +".png";
        $(this).children("#imgBackground").css({
            "background-color" : "#fff"
        });
        $(this).children("a").css({
            "color" : "#555"
        });
        $(this).children("#imgBackground").children("img").attr("src", imgSrc);  
    })
});