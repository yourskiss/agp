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


/* dropdown header menu === start */
$(".navigation .wrapper ul li.megamenu a").click(function()
{
    if($(this).parent().hasClass('active'))
    {
        $(this).next(".dropdownmenu").slideUp(400);
        $(this).parent().removeClass("active");
        $(this).find("i.fa").removeClass("fa-angle-up").addClass("fa-angle-down");
        $("body").css('overflow','auto');
    }
    else
    {
        $(".dropdownmenu").slideUp(400);
        $(".navigation .wrapper ul li.megamenu").removeClass("active");
        $(".navigation .wrapper ul li.megamenu a i.fa").removeClass("fa-angle-up").addClass("fa-angle-down");
        $(this).next(".dropdownmenu").slideDown(400);
        $(this).parent().addClass("active");
        $(this).find("i.fa").removeClass("fa-angle-down").addClass("fa-angle-up");
        $("body").css('overflow','hidden');
    }
});

$(".dropdownclose").click(function()
{
    $(".dropdownmenu").slideUp(400);
    $(".navigation .wrapper ul li.megamenu").removeClass("active");
    $(".navigation .wrapper ul li.megamenu a i.fa").removeClass("fa-angle-up").addClass("fa-angle-down");
    $("body").css('overflow','auto');
});
/* dropdown header menu === end */

/* quick link menu === start */
$("#quicklinkToggle").click(function()
{
    $("#quicklinkBG").fadeIn(500);
    $("#quicklink").animate({right: "0"});
    $("#quicklinkToggle").addClass("active")
});
$("#quicklinkBG").click(function()
{
    $("#quicklinkBG").fadeOut(500);
    $("#quicklink").animate({right: "-265px"});
    $("#quicklinkToggle").removeClass("active")
});
$(document).scroll(function() 
{
    var heightlocation = $(this).scrollTop();
    if(!$("#quicklinkToggle").hasClass('active'))
    {
        if (heightlocation > 600) 
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
            autoplay: true,
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
                    breakpoint: 767,
                    settings: { arrows: true  }
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
            arrows: false,
            dots:false,
            fade: true,
            autoplay: false,
            asNavFor: '.satisfactionNav'
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
                    breakpoint: 559,
                    settings: {
                        vertical: false,
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 380,
                    settings: {
                        vertical: false,
                        slidesToShow: 2,
                    }
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