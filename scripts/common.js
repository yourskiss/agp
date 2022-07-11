/* page refresh on orientation change === START */
$(window).on('orientationchange', function (event) 
{
    location.reload(true);
});
/* page refresh on orientation change === END */


/* onLoad === start */
$(window).on('load', function() 
{
     
});
/* onLoad === end */


// maainmenu


/* dropdown header menu === start */
$(".navigation .wrapper ul li.megamenu a").click(function()
{
    if($(this).parent().hasClass('active'))
    {
        $(this).next(".dropdownmenu").slideUp(400);
        $(this).parent().removeClass("active");
        $(this).find("i.fa").removeClass("fa-angle-up").addClass("fa-angle-down");
    }
    else
    {
        $(".dropdownmenu").slideUp(400);
        $(".navigation .wrapper ul li.megamenu").removeClass("active");
        $(".navigation .wrapper ul li.megamenu a i.fa").removeClass("fa-angle-up").addClass("fa-angle-down");
        $(this).next(".dropdownmenu").slideDown(400);
        $(this).parent().addClass("active");
        $(this).find("i.fa").removeClass("fa-angle-down").addClass("fa-angle-up");
    }
});

$(".dropdownclose").click(function()
{
    $(".dropdownmenu").slideUp(400);
    $(".navigation .wrapper ul li.megamenu").removeClass("active");
    $(".navigation .wrapper ul li.megamenu a i.fa").removeClass("fa-angle-up").addClass("fa-angle-down");
});
/* dropdown header menu === end */


/* whish to connect on changes opacity  === start */
$(".wishtoconnect .wrapper .wishtoconnectcontent ul li select").change(function() {
    $(this).css('opacity','1');   
});
/* whish to connect on changes opacity  === start */



/* footer menu === start */
$(".footerright ul li h2").click(function()
{
    if($(window).width() < 1255)
    {
        if($(this).hasClass('active'))
        {
            $(".footerright ul li ul").slideUp(300);
            $(".footerright ul li h2").removeClass("active");
        }
        else 
        {
            $(".footerright ul li ul").slideUp(300);
            $(".footerright ul li h2").removeClass("active");
    
            $(this).addClass("active");
            $(this).next("ul").slideDown(300);
        }
    }
});
/* footer menu === end */

/* mobile main menu === start */
$("#mainmenu").click(function()
{
    $("#mobilemenuBG").fadeIn(500);
    $("#mobilemenu").fadeIn(500);
    $("body").css("overflow","hidden");
});
$("#mobilemenuBG, #menuobileClose").click(function()
{
    $("#mobilemenuBG").fadeOut(500);
    $("#mobilemenu").fadeOut(500);
    $("body").css("overflow","visible");
});

$(".mobilemenu ul li h2").click(function()
{
    if($(this).hasClass('active'))
    {
        $(".mobilemenu ul li ul").slideUp(300);
        $(".mobilemenu ul li h2").removeClass("active");
        $(".mobilemenu ul li h2 i.fa").removeClass("fa-angle-up").addClass("fa-angle-down");
    }
    else 
    {
        $(".mobilemenu ul li ul").slideUp(300);
        $(".mobilemenu ul li h2").removeClass("active");
        $(".mobilemenu ul li h2 i.fa").removeClass("fa-angle-up").addClass("fa-angle-down");

        $(this).addClass("active");
        $(this).find("i.fa").removeClass("fa-angle-down").addClass("fa-angle-up");
        $(this).next("ul").slideDown(300);
    }
});
/* mobile main menu === end */




/* quick link menu === start */
$("#quickmenu").click(function()
{
    $("#quicklinkToggle").hide().addClass("active");
    $("#quicklinkBG").fadeIn(500);
    $("#quicklink").fadeIn(500);
});
$("#qlMobileClose").click(function()
{
    $("#quicklinkToggle").hide().removeClass("active");
    $("#quicklinkBG").fadeOut(500);
    $("#quicklink").fadeOut(500);
});
$("#quicklinkToggle").click(function()
{
    $("#quicklinkToggle").addClass("active")
    $("#quicklinkBG").fadeIn(500);
    $("#quicklink").animate({right: "0"});
});
$("#quicklinkBG").click(function()
{
    $("#quicklinkToggle").removeClass("active")
    $("#quicklinkBG").fadeOut(500);
    if($(window).width() > 1565)
    {
        $("#quicklink").animate({ right: "-248px" });
    }
    else if($(window).width() < 1565 && $(window).width() > 1255)
    {
        $("#quicklink").animate({ right: "-210px" });
    }
    else 
    {
        // 
        $("#quicklink").fadeOut(500);
    }
});
$(document).scroll(function() 
{
    var heightlocation = $(this).scrollTop();
    if(!$("#quicklinkToggle").hasClass('active'))
    {
        if (heightlocation > 350) 
        {
          $('#quicklinkToggle').css('opacity','1');
        } 
        else 
        {
            $('#quicklinkToggle').css('opacity','0');
        }
    }
});
/* quick link menu === end */





/* ############################ sliders === start ############################ */
$(function($) 
{
    if($("#bannerhome").length > 0)
    {
        // homepage main banner
        $('.bannerhomeslider').slick({
            slidesToShow:1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 3000,
            infinite: false,
            adaptiveHeight: false,
            centerMode: false,
            centerPadding: '0',
            initialSlide:0,
            responsive:
            [
                {
                    breakpoint: 767,
                    settings: { arrows: true  }
                }
            ]
        });
    }

    if($(".knowledgeresources").length > 0)
    {
        // homepage knowledg slider
        $('.knowledgeresourcesslider').slick({
            slidesToShow:3,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 3000,
            infinite: false,
            adaptiveHeight: false,
            centerMode: false,
            centerPadding: '10px',
            initialSlide:0,
            responsive:
            [
                {
                    breakpoint: 1023,
                    settings: { slidesToShow:2 }
                },
                {
                    breakpoint: 599,
                    settings: { slidesToShow:1 }
                },
                {
                    breakpoint: 479,
                    settings: { slidesToShow:1, arrows: true  }
                }

            ]
        });
    }
    
    if($(".satisfactionwrap").length > 0)
    {
        // homepage satisfaction slider
        $('.satisfactionSlider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 3000,
            infinite: false,
            adaptiveHeight: false,
            centerMode: false,
            centerPadding: '0',
            initialSlide:0,
            asNavFor: '.satisfactionNav', 
            responsive: [
                {
                    breakpoint: 1023,
                    settings: { adaptiveHeight: true, }
                },
                {
                    breakpoint: 599,
                    settings: { centerPadding: '10px', adaptiveHeight: false, dots: true, arrows: true, }
                }
            ]
        });
        $('.satisfactionNav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.satisfactionSlider',
            dots: true,
            arrows:true,
            centerMode: true,
            autoplay: false,
            centerPadding: '10px',
            focusOnSelect: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {vertical: false, slidesToShow: 3 }
                },
                {
                    breakpoint: 767,
                    settings: {vertical: false, slidesToShow: 2 }
                },
                {
                    breakpoint: 599,
                    settings: {dots: false,arrows:false,}
                }
            ]
        });
    }

    if($(".serviceotherslider").length > 0)
    {
        // homepage knowledg slider
        $('.serviceotherslider').slick({
            slidesToShow:2,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 3000,
            infinite: true,
            adaptiveHeight: false,
            centerMode: true,
            centerPadding: '5px',
            initialSlide:0,
            responsive:
            [
                {
                    breakpoint: 99999,
                    settings: "unslick"
                },
                {
                    breakpoint: 767,
                    settings: { slidesToShow:1 }
                }
            ]
        });
    }
});
/* ############################ sliders === end ############################ */



/* ############################ satisfaction  video === start ############################ */
function satisfactionShowVideo(iframesrc) // video show
{
    $(".satisfactionVideo").fadeIn(600);
    $(".satisfactionVideo iframe").attr("src", "https://www.youtube.com/embed/"+iframesrc+"?autoplay=1&mute=0&loop=1&rel=0&showinfo=0&controls=0&modestbranding=1&playsinline=1&playlist="+iframesrc);
}
function satisfactionHideVideo() // video close 
{
    $(".satisfactionVideo").fadeOut(600);
    $(".satisfactionVideo iframe").attr('src', '');
}
/* ############################ satisfaction  video === end ############################ */


/* ############################ services === start ############################ */
function changepincode()
{
    $("#pinCurrent").slideUp(300);
    $("#pinNew").slideDown(300);
    $("#pinChange").hide();
}
function shwopincode()
{
    if($("#pinchangeInput").val() == '')
    {
        $("#pinChangeError").show().html("Enter Pincode");
    }
    else if($("#pinchangeInput").val().length != 6)
    {
        $("#pinChangeError").show().html("Invalide Pincode");
    }
    else 
    {
        $("#pinCurrent").slideDown(300);
        $("#pinNew").slideUp(300);
        $("#pinChange").show();
        $("#pinChangeError").hide();
    }
}

function whychoosemore()
{
    $("#whychoosemore").hide();
    $("#whychooselist li").slideDown();
}
/* ############################ services === end ############################ */



/* ############################ csr === start ############################ */
if($(".commitmentsContainer").length > 0)
{
    $("#commitmentstitletabs li").click(function(){
        $("#commitmentstitletabs").addClass("disabled")
        let getname = $(this).attr("data-id");
        $("#commitmentstitletabs  li").removeClass("active");
        $(".commitmentsContainer .commitmentsBox").slideUp(500);

        $(this).addClass("active");
        $(".commitmentsContainer .commitmentsBox[data-src='" + getname + "']").slideDown(500);
        setTimeout(function(){ $("#commitmentstitletabs").removeClass('disabled'); }, 500);
    });
}
if($(".csrAbout").length > 0)
{
    $(".csrAboutRight ul li").click(function(){
        let jumpdiv = 0;
        if($(window).width() > 1565) jumpdiv = 136;
        else if($(window).width() < 1565 && $(window).width() > 1255) jumpdiv = 112;
        else if($(window).width() < 1255 && $(window).width() > 479) jumpdiv = 102;
        else jumpdiv = 87;
        $('html, body').animate({scrollTop: $("#commitmentstitletabs").offset().top  - jumpdiv }, 500);
        let getname = $(this).attr("data-name");
        $("#commitmentstitletabs li").removeClass("active");
        $(".commitmentsContainer .commitmentsBox").slideUp(500);
        $("#commitmentstitletabs li[data-id='" + getname + "']").addClass("active");
        $(".commitmentsContainer .commitmentsBox[data-src='" + getname + "']").slideDown(500);
    });
}
/* ############################ csr === end ############################ */