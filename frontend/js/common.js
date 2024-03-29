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


/* search bar in header === start */
if($("#searchmain").length > 0 && $("#searchinheader").length > 0)
{
    $("#searchmain").click(function(e)
    {
        e.preventDefault();
        e.stopPropagation();
        $("#searchinheader").slideToggle(300);
        $("#searchmain").toggleClass("active");
        if($(window).width() > 1255)
        {
            $("#mainmenuulli").slideToggle(300);
        }
    });
    $("#searchinheader").click(function(e)
    {
        e.preventDefault();
        e.stopPropagation();
    });
    $("#searchHeadBack, #searchinheader article").click(function()
    {
        $("#searchinheader").slideUp(300);
        $("#searchmain").removeClass("active");
        $("#searchInput").val('');
        if($(window).width() > 1255)
        {
            $("#mainmenuulli").fadeIn(300);
        }
    });
    $('body').click(function(e) // close on click body
    {    
        e.stopPropagation();
        if (e.target != $('#searchmain')  || e.target != $('#searchinheader') || e.target != $('#searchHeadBack')) 
        {
            $("#searchinheader").slideUp(300);
            $("#searchmain").removeClass("active");
            $("#searchInput").val('');
            if($(window).width() > 1255)
            {
                $("#mainmenuulli").fadeIn(300);
            }
        }
    });
}
/* search bar in header === end */



/* whish to connect on changes opacity  === start */
$(".wishtoconnect .wrapper .wishtoconnectcontent ul li select").change(function() {
    $(this).css('opacity','1');   
});
/* whish to connect on changes opacity  === end */



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
    $("body").css("overflow","hidden");
});
$("#qlMobileClose").click(function()
{
    $("#quicklinkToggle").hide().removeClass("active");
    $("#quicklinkBG").fadeOut(500);
    $("#quicklink").fadeOut(500);
    $("body").css("overflow","visible");
});
$("#quicklinkToggle").click(function()
{
    if($(this).hasClass("active"))
    {
        $("#quicklinkToggle").removeClass("active")
        $("#quicklinkBG").fadeOut(500);
        if($(window).width() > 1565)
        {
            $("#quicklink").animate({ right: "-270px" });
        }
        else if($(window).width() < 1565 && $(window).width() > 1255)
        {
            $("#quicklink").animate({ right: "-250px" });
        }
        else 
        {
            $("#quicklink").fadeOut(500);
            $("body").css("overflow","visible");
        }
    }
    else 
    {
        $("#quicklinkToggle").addClass("active")
        $("#quicklinkBG").fadeIn(500);
        $("#quicklink").animate({right: "0"});
    }
});
$("#quicklinkBG").click(function()
{
    $("#quicklinkToggle").removeClass("active")
    $("#quicklinkBG").fadeOut(500);
    if($(window).width() > 1565)
    {
        $("#quicklink").animate({ right: "-270px" });
    }
    else if($(window).width() < 1565 && $(window).width() > 1255)
    {
        $("#quicklink").animate({ right: "-250px" });
    }
    else 
    {
        $("#quicklink").fadeOut(500);
        $("body").css("overflow","visible");
    }
});
$(document).scroll(function() 
{
    /*
    var heightlocation = $(this).scrollTop();
    if(!$("#quicklinkToggle").hasClass('active'))
    {
        if (heightlocation > 250) 
        {
          $('#quicklinkToggle').css('opacity','1');
        } 
        else 
        {
            $('#quicklinkToggle').css('opacity','0');
        }
    }
    */
});
/* quick link menu === end */


/* top margin on scroll donw === start */
var jumpdiv;
if($(window).width() > 1565) { jumpdiv = 136 } 
else if($(window).width() < 1565 && $(window).width() > 1255) { jumpdiv = 112 } 
else if($(window).width() < 1255 && $(window).width() > 479) { jumpdiv = 102 } 
else { jumpdiv = 87 } 
/*  top margin on scroll donw === end */

 
/* ############################ Scroller === start ############################ */
$(function($) 
{
    // team profile
    if($(".viewprofilesPopup").length > 0)
    {
        $('.profilescroller').slimScroll({ 
            width: "100%",
            height: "100%",
            size: "4px",
            color: "#F2662C",
            position: "right",
            distance: "0",
            start: "top",
            opacity: 1,
            alwaysVisible: false,
            disableFadeOut: true,
            railVisible: true,
            allowPageScroll: false,
            railColor: "#000000",
            railOpacity: 0,
            railDraggable: true,
            railClass: "profilescrollerRail",
            barClass: "profilescrollerBar",
            wrapperClass: "profilescrollerContainer",
            wheelStep: 10,
            touchScrollStep: 100,
            borderRadius: "5px",
            railBorderRadius: "5px"
        });
    }

    // address list
    if($(".adresscontainer").length > 0)
    {
        $('.addressscroll').slimScroll({ 
            width: "100%",
            height: "100%",
            size: "4px",
            color: "#F2662C",
            position: "right",
            distance: "0",
            start: "top",
            opacity: 0,
            alwaysVisible: true,
            disableFadeOut: true,
            railVisible: true,
            allowPageScroll: false,
            railColor: "#000000",
            railOpacity: 0,
            railDraggable: true,
            railClass: "addressscrollRail",
            barClass: "addressscrollBar",
            wrapperClass: "addressscrollContainer",
            wheelStep: 10,
            touchScrollStep: 100,
            borderRadius: "5px",
            railBorderRadius: "5px"
        });
    }


     // png location list
     if($(".pnglocationlist").length > 0)
     {
         $('.pnglocationscroll').slimScroll({ 
             width: "100%",
             height: "100%",
             size: "4px",
             color: "#F2662C",
             position: "right",
             distance: "0",
             start: "top",
             opacity: 0,
             alwaysVisible: true,
             disableFadeOut: true,
             railVisible: true,
             allowPageScroll: false,
             railColor: "#000000",
             railOpacity: 0,
             railDraggable: true,
             railClass: "pnglocationscrollRail",
             barClass: "pnglocationscrollBar",
             wrapperClass: "pnglocationscrollContainer",
             wheelStep: 10,
             touchScrollStep: 100,
             borderRadius: "5px",
             railBorderRadius: "5px"
         });
     }
    
     // cng stationl  list
     if($(".cngstationlist").length > 0)
     {
        if($(window).width() >= 1024)
        {
            $('.cngstationscroll').slimScroll({ 
                width: "100%",
                height: "100%",
                size: "4px",
                color: "#F2662C",
                position: "right",
                distance: "0",
                start: "top",
                opacity: 0,
                alwaysVisible: true,
                disableFadeOut: true,
                railVisible: true,
                allowPageScroll: false,
                railColor: "#000000",
                railOpacity: 0,
                railDraggable: true,
                railClass: "cngstationscrollRail",
                barClass: "cngstationscrollBar",
                wrapperClass: "cngstationscrollContainer",
                wheelStep: 10,
                touchScrollStep: 100,
                borderRadius: "5px",
                railBorderRadius: "5px"
            });
        } 
     }


     // emergency contact list
     if($(".emergencycontactlist").length > 0)
     {
         $('.emergencycontactscroll').slimScroll({ 
             width: "100%",
             height: "100%",
             size: "4px",
             color: "#F2662C",
             position: "right",
             distance: "0",
             start: "top",
             opacity: 0,
             alwaysVisible: true,
             disableFadeOut: true,
             railVisible: true,
             allowPageScroll: false,
             railColor: "#000000",
             railOpacity: 0,
             railDraggable: true,
             railClass: "emergencycontactscrollRail",
             barClass: "emergencycontactscrollBar",
             wrapperClass: "emergencycontactscrollContainer",
             wheelStep: 10,
             touchScrollStep: 100,
             borderRadius: "5px",
             railBorderRadius: "5px"
         });
     }

});
/* ############################ Scroller === end ############################ */



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
            autoplaySpeed: 4000,
            infinite: true,
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
            autoplay: true,
            autoplaySpeed:4000,
            infinite: false,
            adaptiveHeight: false,
            centerMode: false,
            centerPadding: '0',
            initialSlide:0,
            asNavFor: '.satisfactionNav', 
            responsive: [
                {
                    breakpoint: 1023,
                    settings: { dots: false, arrows: false }
                },
                {
                    breakpoint: 599,
                    settings: { centerPadding: '10px', dots: true, arrows: true }
                }
            ]
        });
        $('.satisfactionNav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.satisfactionSlider',
            dots: true,
            arrows:true,
            vertical: false,
            centerMode: false,
            autoplay: false,
            centerPadding: '10px',
            focusOnSelect: true,
            infinite: false,
            initialSlide:0,
            responsive: [
                {
                    breakpoint: 1255,
                    settings: { slidesToShow: 3 }
                },
                {
                    breakpoint: 767,
                    settings: {dots: false,arrows:false, }
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

    if($(".popularquestions").length > 0)
    {
        // faqs
        $('.popularquestionsSlider').slick({
            slidesToShow:6,
            slidesToScroll: 6,
            dots: true,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 3000,
            infinite: false,
            adaptiveHeight: false,
            centerMode: false,
            centerPadding: '12px',
            initialSlide:0,
            responsive:
            [
                {
                    breakpoint: 1565,
                    settings: { slidesToShow:5, slidesToScroll:5 }
                },
                {
                    breakpoint: 1255,
                    settings: { slidesToShow:4, slidesToScroll:4 }
                },
                {
                    breakpoint: 1023,
                    settings: { slidesToShow:3, slidesToScroll:3 }
                },
                {
                    breakpoint: 599,
                    settings: { slidesToShow:2, slidesToScroll:2 }
                },
                {
                    breakpoint: 479,
                    settings: { centerPadding: '5px', slidesToShow:2, slidesToScroll:2 }
                }
            ]
        });
    }
    

    if($(".calulatorothers").length > 0)
    {
        // calulator others slider
        $('.calulatorslider').slick({
            slidesToShow:3,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 3000,
            infinite: true,
            adaptiveHeight: false,
            centerMode: true,
            centerPadding: '0',
            initialSlide:0,
            responsive:
            [
                {
                    breakpoint: 99999,
                    settings: "unslick"
                },
                {
                    breakpoint: 1023,
                    settings: { centerPadding: '10px', slidesToShow:2 }
                },
                {
                    breakpoint: 599,
                    settings: { centerPadding: '15px', slidesToShow:1 }
                }
            ]
        });
    }




    if($(".connectionothers").length > 0)
    {
        // calulator others slider
        $('.connectionslider').slick({
            slidesToShow:4,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 3000,
            infinite: true,
            adaptiveHeight: false,
            centerMode: true,
            centerPadding: '0',
            initialSlide:0,
            responsive:
            [
                {
                    breakpoint: 99999,
                    settings: "unslick"
                },
                {
                    breakpoint: 1255,
                    settings: { centerPadding: '10px', slidesToShow:3 }
                },
                {
                    breakpoint: 1023,
                    settings: { centerPadding: '10px', slidesToShow:2 }
                },
                {
                    breakpoint: 599,
                    settings: { centerPadding: '15px', slidesToShow:1 }
                }
            ]
        });
    }


});
/* ############################ sliders === end ############################ */



/* ############################ satisfaction  video === start ############################ */
function satisfactionShowVideo(iframesrc) // video show
{
    $("body").css("overflow","hidden");
    $(".satisfactionVideo").fadeIn(600);
    $(".satisfactionVideo iframe").attr("src", "https://www.youtube.com/embed/"+iframesrc+"?autoplay=1&mute=0&loop=1&rel=0&showinfo=0&controls=1&modestbranding=1&playsinline=1&playlist="+iframesrc);
}
function satisfactionHideVideo() // video close 
{
    $("body").css("overflow","visible");
    $(".satisfactionVideo").fadeOut(600);
    $(".satisfactionVideo iframe").attr('src', '');
}
/* ############################ satisfaction  video === end ############################ */


/* ############################ services === start ############################ */
if($("#whychooselist").length > 0)
{

    $("#whychooselist li h4").click(function()
    {
        if($(window).width() < 1255)
        {
            if($(this).hasClass("active"))
            {
                $(this).removeClass("active");
                $(this).next("dl").slideUp(300);
            }
            else 
            {
                $("#whychooselist li h4").removeClass("active");
                $("#whychooselist li dl").slideUp(300);

                $(this).addClass("active");
                $(this).next("dl").slideDown(300);
            }
        }
    });
}
function whychooseusmoreview()
{
    $("#whychooselist li.whychoose_hide").slideToggle(500);
    $("#whychooselist li div h6 span").toggleClass("active");

    if($("#whychooselist li div h6 span").hasClass("active"))
    {
        $("#whychooseusmoreviewText").text("View less");
        $("#whychooseusmoreviewIcon").removeClass("fa-angle-down").addClass("fa-angle-up");
    }
    else 
    {
        $("#whychooseusmoreviewText").text("View more");
        $("#whychooseusmoreviewIcon").removeClass("fa-angle-up").addClass("fa-angle-down");
    }
}

 
function shwopricebydistrict()
{
    if($("#district").val() == null || $("#district").val() == 0)
    {
        $("#districtError").show();
        return false;
    }
    else 
    {
        $("#districtError").hide();
        return true;
    }
}

function hidevaluechain()
{
    $(".valuechainBG").fadeOut(500);
    $(".valuechainPopup").fadeOut(500);
}

function showvaluechain()
{
    $(".valuechainBG").fadeIn(500);
    $(".valuechainPopup").fadeIn(500);
}

/* ############################ services === end ############################ */



/* ############################ csr === start ############################ */
if($(".commitmentsContainer").length > 0)
{
    
    $("#commitmentstitletabs li").click(function(){
        $(".csrloader").show(50);
        $("#commitmentstitletabs").addClass("disabled")
        let getname = $(this).attr("data-id");
        $("#commitmentstitletabs li").removeClass("active");
        $(".commitmentsContainer .commitmenthead").removeClass("active").addClass('disabled');
        $(".commitmentsContainer .commitmentbody").slideUp(500);

        $("#commitmentstitletabs li[data-id='" + getname + "']").addClass("active");
        $(".commitmentsContainer .commitmenthead[data-id='" + getname + "']").addClass("active");
        $(".commitmentsContainer .commitmentbody[data-src='" + getname + "']").slideDown(500);
        
        setTimeout(function(){ $("#commitmentstitletabs").removeClass('disabled'); }, 500);
        setTimeout(function(){ $(".commitmentsContainer .commitmenthead").removeClass('disabled'); }, 500);
        setTimeout(function(){ $(".csrloader").fadeOut(200); }, 600);
    });


    $(".commitmentsContainer .commitmenthead").click(function()
    {
        if($(this).hasClass("active"))
        {
            $("#commitmentstitletabs li").removeClass("active");
            $(".commitmentsContainer .commitmenthead").removeClass("active").removeClass('disabled');
            $(".commitmentsContainer .commitmentbody").slideUp(500);
        }
        else 
        {
            $('html, body').animate({scrollTop: $(".commitmentsContainer").offset().top  - jumpdiv },500);
            $(".csrloader").slideDown(50);
            $("#commitmentstitletabs").addClass("disabled")
            let getname = $(this).attr("data-id");
            $("#commitmentstitletabs li").removeClass("active");
            $(".commitmentsContainer .commitmenthead").removeClass("active").addClass('disabled');
            $(".commitmentsContainer .commitmentbody").slideUp(500);
    
            $("#commitmentstitletabs li[data-id='" + getname + "']").addClass("active");
            $(".commitmentsContainer .commitmenthead[data-id='" + getname + "']").addClass("active");
            $(".commitmentsContainer .commitmentbody[data-src='" + getname + "']").slideDown(500);
            
            setTimeout(function(){ $("#commitmentstitletabs").removeClass('disabled'); }, 500);
            setTimeout(function(){ $(".commitmentsContainer .commitmenthead").removeClass('disabled'); }, 500);
            setTimeout(function(){ $(".csrloader").slideUp(200); }, 600);
        }
    });
}
if($(".csrAbout").length > 0)
{
    $(".csrAboutRight ul li").click(function(){ 
        setTimeout(function(){ 
            $('html, body').animate({scrollTop: $(".commitmentsWrap").offset().top  - jumpdiv },500);
        }, 300);
        $(".csrloader").show(50);
        let getname = $(this).attr("data-name");
        $("#commitmentstitletabs li").removeClass("active");
        $(".commitmentsContainer .commitmenthead").removeClass("active").addClass('disabled');
        $(".commitmentsContainer .commitmentbody").slideUp(300);
        $("#commitmentstitletabs li[data-id='" + getname + "']").addClass("active");
        $(".commitmentsContainer .commitmenthead[data-id='" + getname + "']").addClass("active");
        $(".commitmentsContainer .commitmentbody[data-src='" + getname + "']").slideDown(300);

        setTimeout(function(){ $("#commitmentstitletabs").removeClass('disabled'); }, 500);
        setTimeout(function(){ $(".commitmentsContainer .commitmenthead").removeClass('disabled'); }, 500);
        setTimeout(function(){ $(".csrloader").slideUp(200); }, 600);
    });
}


if($(".csr_pagination").length > 0)
{
    $("#csr_pagination div h2").click(function(e)
    {
        e.preventDefault();
        e.stopPropagation();
        $("#csr_pagination div ul").slideToggle(300);
    });
    $("#csr_pagination div ul li").click(function(e)
    {
        if($(window).width() < 1023)
        {
            e.preventDefault();
            e.stopPropagation();
            $("#csr_pagination div ul").slideUp(300);
            $("#csr_pagination div ul li").removeClass("active");
            $(this).addClass("active");
            var pagenumber = $(this).find("a").text();
            $("#csr_pagination div h2").text(pagenumber);
        }
    });
    $('body').click(function(e) // close on click body
    {    
        e.stopPropagation();
        if($(window).width() < 1023)
        {
            $("#csr_pagination div ul").slideUp(300);
        }
    });
}



/* ############################ csr === end ############################ */


/* ############################ ABOUT === start ############################ */
function hide_cgdlicenses()
{
    $(".cgd_licensesBG").fadeOut(500);
    $(".cgd_licenses_popup").fadeOut(500);
}

function show_cgdlicenses()
{
    $(".cgd_licensesBG").fadeIn(500);
    $(".cgd_licenses_popup").fadeIn(500);
}
/* ############################ ABOUT === end ############################ */



/* ############################ team === start ############################ */
if($("#teamTabs").length > 0 &&  $("#teamContainer").length > 0)
{
    $("#teamTabs ul li").click(function()
    {
        let tagname = $(this).attr("data-name");
        $(".teamsloader[data-id='" + tagname + "']").fadeIn(100);
        $("#teamTabs ul li").removeClass("active");
        $("#teamContainer .teamheader").removeClass("active");
        $("#teamContainer .teamsection").fadeOut(300);
        $("#teamTabs ul, #teamContainer .teamheader").addClass("disabled")

        $("#teamTabs ul li[data-name='" + tagname + "']").addClass("active");
        $("#teamContainer .teamheader[data-name='" + tagname + "']").addClass("active");
        $("#teamContainer .teamsection[data-id='" + tagname + "']").fadeIn(300);
        setTimeout(function(){ $("#teamTabs ul, #teamContainer .teamheader").removeClass('disabled'); }, 500);
        setTimeout(function(){ $(".teamsloader").fadeOut(200); }, 500);
    });
    $("#teamContainer .teamheader").click(function()
    {
        let tagname = $(this).attr("data-name");
        if($(this).hasClass("active"))
        {
            $("#teamTabs ul li").removeClass("active");
            $("#teamContainer .teamheader").removeClass("active");
            $("#teamContainer .teamsection").slideUp(500);
        }
        else 
        {
            $('html, body').animate({scrollTop: $("#teamContainer").offset().top  - jumpdiv },500);
            $(".teamsloader[data-id='" + tagname + "']").fadeIn(100);
            $("#teamTabs ul li").removeClass("active");
            $("#teamContainer .teamheader").removeClass("active");
            $("#teamContainer .teamsection").fadeOut(300);
            $("#teamTabs ul, #teamContainer .teamheader").addClass("disabled")
    
            $("#teamTabs ul li[data-name='" + tagname + "']").addClass("active");
            $("#teamContainer .teamheader[data-name='" + tagname + "']").addClass("active");
            $("#teamContainer .teamsection[data-id='" + tagname + "']").fadeIn(300);
            setTimeout(function(){ $("#teamTabs ul, #teamContainer .teamheader").removeClass('disabled'); }, 500);
            setTimeout(function(){ $(".teamsloader").fadeOut(200); }, 500);
        }

    });
}
function viewprofiles(val)
{
    $(".viewprofilesBG").fadeIn(300);
    $(".viewprofilesPopup").fadeIn(500);
    $("body").css("overflow","hidden");

    var team_src = $("#"+val+" aside img").attr("data-src");
    var team_name = $("#"+val+" div h2").html();
    var team_designation = $("#"+val+" div h3").html();
    var team_about = $("#"+val+" div h4").html();

    $("#team_profile_picture").attr('src', team_src);
    $("#team_profile_name").html(team_name);
    $("#team_profile_designation").html(team_designation);
    $("#team_profile_about").html(team_about);
}
function closeprofiles()
{
    $(".viewprofilesBG").fadeOut(500);
    $(".viewprofilesPopup").fadeOut(300);
    $("body").css("overflow","visible");

    $("#team_profile_picture").attr('src', '');
    $("#team_profile_name").html('');
    $("#team_profile_designation").html('');
    $("#team_profile_about").html('');
}
/* ############################ team === end ############################ */


/* ############################ faqs === start ############################ */
if($("#faqsTabs").length > 0 &&  $("#faqsContainer").length > 0)
{
    $("#faqsTabs ul li").click(function()
    {
        let tagname = $(this).attr("data-name");
        $(".faqsloader[data-id='" + tagname + "']").slideDown(50);
        $("#faqsTabs ul li").removeClass("active");
        $("#faqsContainer .faqsheader").removeClass("active");
        $("#faqsContainer .faqssection").fadeOut(200);
        $("#faqsTabs ul, #faqsContainer .faqsheader").addClass("disabled");

        $("#faqsTabs ul li[data-name='" + tagname + "']").addClass("active");
        $("#faqsContainer .faqsheader[data-name='" + tagname + "']").addClass("active");
        $("#faqsContainer .faqssection[data-id='" + tagname + "']").fadeIn(200);
        setTimeout(function(){ $("#faqsTabs ul, #faqsContainer .faqsheader").removeClass('disabled'); }, 500);
        setTimeout(function(){ $(".faqsloader").slideUp(200); }, 500);


        $("#faqsContainer .faqssection ul li").removeClass("active");
        $("#faqsContainer .faqssection ul li h4").removeClass("active");
        $("#faqsContainer .faqssection ul li p").slideUp(300);
    });

    $("#faqsContainer .faqsheader").click(function()
    {
        if($(this).hasClass("active"))
        {
            $("#faqsTabs ul li").removeClass("active");
            $("#faqsContainer .faqsheader").removeClass("active");
            $("#faqsContainer .faqssection").slideUp(500);
        }
        else 
        {
            $('html, body').animate({scrollTop: $("#faqsContainer").offset().top  - jumpdiv },500);
            let tagname = $(this).attr("data-name");
            $(".faqsloader[data-id='" + tagname + "']").slideDown(50);
            $("#faqsTabs ul li").removeClass("active");
            $("#faqsContainer .faqsheader").removeClass("active");
            $("#faqsContainer .faqssection").fadeOut(200);
            $("#faqsTabs ul, #faqsContainer .faqsheader").addClass("disabled")
    
            $("#faqsTabs ul li[data-name='" + tagname + "']").addClass("active");
            $("#faqsContainer .faqsheader[data-name='" + tagname + "']").addClass("active");
            $("#faqsContainer .faqssection[data-id='" + tagname + "']").fadeIn(200);
            setTimeout(function(){ $("#faqsTabs ul, #faqsContainer .faqsheader").removeClass('disabled'); }, 500);
            setTimeout(function(){ $(".faqsloader").slideUp(200); }, 500);
        }
        $("#faqsContainer .faqssection ul li").removeClass("active");
        $("#faqsContainer .faqssection ul li h4").removeClass("active");
        $("#faqsContainer .faqssection ul li p").slideUp(300);
    });

    $("#faqsContainer .faqssection ul li h4").click(function()
    {
        if($(this).hasClass("active"))
        {
            $("#faqsContainer .faqssection ul li").removeClass("active");
            $("#faqsContainer .faqssection ul li h4").removeClass("active");
            $("#faqsContainer .faqssection ul li p").slideUp(300);
        }
        else 
        {
            $("#faqsContainer .faqssection ul li").removeClass("active");
            $("#faqsContainer .faqssection ul li h4").removeClass("active");
            $("#faqsContainer .faqssection ul li p").slideUp(300);
            $(this).parent().addClass("active");
            $(this).addClass("active");
            $(this).next("p").slideDown(500);
        }
    });
}
if($(".popularquestions").length > 0)
{
    $(".popularquestionsSlider .itmes").click(function()
    {
        let tagname = $(this).attr("data-name");
        let tagid = $(this).attr("data-id");
        $("#faqsTabs ul li").removeClass("active");
        $("#faqsContainer .faqsheader").removeClass("active");
        $("#faqsContainer .faqssection").fadeOut(200);

        $("#faqsTabs ul li[data-name='" + tagname + "']").addClass("active");
        $("#faqsContainer .faqsheader[data-name='" + tagname + "']").addClass("active");
        $("#faqsContainer .faqssection[data-id='" + tagname + "']").fadeIn(200);

        $('html, body').animate({scrollTop: $("#faqsTabs").offset().top  - jumpdiv }, 500);

        $("#faqsContainer .faqssection ul li").removeClass("active");
        $("#faqsContainer .faqssection ul li h4").removeClass("active");
        $("#faqsContainer .faqssection ul li p").slideUp(300);

        $("#faqsContainer .faqssection ul li[data-id='" + tagid + "']").addClass("active");
        $("#faqsContainer .faqssection ul li[data-id='" + tagid + "'] h4").addClass("active");
        $("#faqsContainer .faqssection ul li[data-id='" + tagid + "'] p").slideDown(300);
    });
}
if($("#faqssearch").length > 0)
{
    $('#faqssearch').on('keypress', function (e) 
    {
        if (e.keyCode == '13' || e.charCode == '13') return false;
    });
    $("#faqssearch").keyup(function() 
    {
        if($(this).val() == '')
        {
            clearSearch();
        }
        else 
        {
            $("#faqsTabs").hide();
            $(".faqsheader").hide();
            $(".faqsWrap .faqsContainer .faqssection").show();
            $(".popularquestions").hide();
            $(".faqsAbout").hide();
            var filter = $(this).val(),
            count = 0;
            if (count == 0) { $('#faqsnoresult').hide();  }
            $('.faqsWrap .faqsContainer .faqssection ul li').each(function() 
            {
                if ($(this).html().search(new RegExp(filter, "i")) < 0) 
                {
                    if (count == 0) $('#faqsnoresult').show();
                    else $('#faqsnoresult').hide();
                    $(this).hide().removeClass("active");
                    $(this).find("h4").removeClass("active");
                    $(this).find("p").hide();
                } 
                else 
                {
                    $(this).show().addClass("active");
                    $(this).find("h4").addClass("active");
                    $(this).find("p").show();
                    count++;
                }
            });
        }  
    });
}
function clearSearch()
{
    $("#faqssearch").val('');
    $('#faqsnoresult').hide();
    if($(window).width() > 1023) {
        $("#faqsTabs").show();
        $(".faqsheader").hide();
        $(".popularquestions").show();
    }
    else {
        $("#faqsTabs").hide();
        $(".faqsheader").show();
        $(".popularquestions").hide();
    }
    $(".faqsAbout").show();
    $(".faqsWrap .faqsContainer .faqssection").hide();
    $(".faqsWrap .faqsContainer .faqssection[data-id='about']").show();
    $(".faqsWrap .faqsContainer .faqssection ul li").show().removeClass("active");
    $(".faqsWrap .faqsContainer .faqssection ul li h4").removeClass("active");
    $(".faqsWrap .faqsContainer .faqssection ul li p").hide();
}
/* ############################ faqs === end ############################ */




/* ############################ contact us === start ############################ */
if($("#addresssearchToggle").length > 0 && $("#addresssearchClose").length > 0)
{
    $("#addresssearchToggle").click(function()
    {
        $("#addresssearchInput").animate({left: "0"});
    });
    $("#addresssearchClose").click(function()
    {
        $("#addresssearchInput").animate({left: "100%"});
        $('#geographicalareasearch').val("").trigger("keyup");
    });
}

if($(".addressheading").length > 0 && $(".adresslist").length > 0)
{
    $('#geographicalareasearch').on('keypress', function (e) 
    {
        if (e.keyCode == '13' || e.charCode == '13') return false;
    });
    $("#geographicalareasearch").keyup(function() {
        selectjob();
    });
    selectjob = function() {
        var designationtitle = $("#geographicalareasearch").val();

        $('#geographicalarea li').hide();
        var tablerow = $('#geographicalarea li').filter(function(index) {
          return ($(this).text().toLowerCase().indexOf(designationtitle.toLowerCase()) >= 0 )
        });
        if(tablerow == '' || tablerow.length == 0)
        {
            $("#geographicalareanotavailable").show();    
        }
        else 
        {
            $("#geographicalareanotavailable").hide();
            tablerow.show();
        }
    }
}
/* ############################ contact us === end ############################ */



/* ############################ png available location === start ############################ */
if($("#locationsearchToggle").length > 0 && $("#locationsearchClose").length > 0 && $("#pnglocationsearch").length > 0)
{
    $("#locationsearchToggle").click(function()
    {
        $("#pnglocationsearch").animate({left: "0"});
    });
    $("#locationsearchClose").click(function()
    {
        $("#pnglocationsearch").animate({left: "100%"});
        $('#locationsearchInput').val("").trigger("keyup");
    });
}

if($("#getnewpngconnection").length > 0)
{
    $("#getnewpngconnection .getnewpngconnection_tab span").click(function()
    {
        var getname = $(this).attr("data-id");
        $(".getnewpngconnection_tab span").removeClass("active");
        $(".getnewpngconnection_body").slideUp(300);
        $(".getnewpngconnection_head").removeClass("active");

        $(".getnewpngconnection_tab span[data-id='"+getname+"']").addClass("active");
        $(".getnewpngconnection_body[data-id='"+getname+"']").slideDown(300);
        $(".getnewpngconnection_head[data-id='"+getname+"']").addClass("active");
    });
    $(".getnewpngconnection_head").click(function()
    {
        if($(this).hasClass("active"))
        {
            $(".getnewpngconnection_tab span").removeClass("active");
            $(".getnewpngconnection_body").slideUp(300);
            $(".getnewpngconnection_head").removeClass("active");
        }
        else 
        {
            var getname = $(this).attr("data-id");
            $(".getnewpngconnection_tab span").removeClass("active");
            $(".getnewpngconnection_body").slideUp(300);
            $(".getnewpngconnection_head").removeClass("active");
    
            $(".getnewpngconnection_tab span[data-id='"+getname+"']").addClass("active");
            $(".getnewpngconnection_body[data-id='"+getname+"']").slideDown(300);
            $(".getnewpngconnection_head[data-id='"+getname+"']").addClass("active");
        }

    });
}



/* ############################ png available location === end ############################ */




/* ############################  cng station === start ############################ */
if($("#cngStationSearch").length > 0 && $("#cngStationToggle").length > 0 && $("#cngStationSearchClose").length > 0)
{
    $("#cngStationToggle").click(function()
    {
        $("#cngStationSearch").animate({left: "0"});
    });
    $("#cngStationSearchClose").click(function()
    {
        $("#cngStationSearch").animate({left: "100%"});
        $('#cngStationSearchInput').val("").trigger("keyup");
    });
}
/* ############################  cng station === end ############################ */
 


/* ############################  Health & Safety === start ############################ */
if($("#hsdoanddontTabs").length > 0 &&  $("#hsdoanddontBody").length > 0)
{
    $("#hsdoanddontTabs ul li").click(function()
    {
        let tagname = $(this).attr("data-name");
        $(".hsfaqloader[data-id='" + tagname + "']").slideDown(50);
        
        $("#hsdoanddontTabs ul li").removeClass("active");
        $("#hsdoanddontBody .hsdoanddontheader").removeClass("active");
        $("#hsdoanddontBody .hsdoanddontsection").fadeOut(200);
        $("#hsdoanddontTabs ul, #hsdoanddontBody .hsdoanddontheader").addClass("disabled")

        $("#hsdoanddontTabs ul li[data-name='" + tagname + "']").addClass("active");
        $("#hsdoanddontBody .hsdoanddontheader[data-name='" + tagname + "']").addClass("active");
        $("#hsdoanddontBody .hsdoanddontsection[data-id='" + tagname + "']").fadeIn(200);
        setTimeout(function(){ $("#hsdoanddontTabs ul, #hsdoanddontBody .hsdoanddontheader").removeClass('disabled'); }, 500);
        setTimeout(function(){ $(".hsfaqloader").slideUp(200); }, 500);
    });
    $("#hsdoanddontBody .hsdoanddontheader").click(function()
    {
        if($(this).hasClass("active"))
        {
            $("#hsdoanddontTabs ul li").removeClass("active");
            $("#hsdoanddontBody .hsdoanddontheader").removeClass("active");
            $("#hsdoanddontBody .hsdoanddontsection").slideUp(500);
        }
        else 
        {
            $('html, body').animate({scrollTop: $("#hsdoanddontBody").offset().top  - jumpdiv },500);
            let tagname = $(this).attr("data-name");
            $(".hsfaqloader[data-id='" + tagname + "']").slideDown(50);
            $("#hsdoanddontTabs ul li").removeClass("active");
            $("#hsdoanddontBody .hsdoanddontheader").removeClass("active");
            $("#hsdoanddontBody .hsdoanddontsection").fadeOut(200);
            $("#hsdoanddontTabs ul, #hsdoanddontBody .hsdoanddontheader").addClass("disabled")
    
            $("#hsdoanddontTabs ul li[data-name='" + tagname + "']").addClass("active");
            $("#hsdoanddontBody .hsdoanddontheader[data-name='" + tagname + "']").addClass("active");
            $("#hsdoanddontBody .hsdoanddontsection[data-id='" + tagname + "']").fadeIn(200);
            setTimeout(function(){ $("#hsdoanddontTabs ul, #hsdoanddontBody .hsdoanddontheader").removeClass('disabled'); }, 500);
            setTimeout(function(){ $(".hsfaqloader").slideUp(200); }, 500);
        }
    });
}
if($("#emergencyAlphabetical").length > 0 &&  $("#emergencycontactlist").length > 0)
{
    $("#emergencyAlphabetical ul li").click(function()
    {
        let alphabetname = $(this).attr("data-name");
        $(".emergencyloader").slideDown(50);
        $("#emergencyAlphabetical ul").addClass("disabled")
        $('#emergencycontactinput').val("").trigger("keyup");
        $("#emergencyAlphabetical ul li").removeClass("active");
        $("#emergencylist li").slideUp(300);
        $("#emergencyAlphabetical ul li[data-name='" + alphabetname + "']").addClass("active");
        $("#emergencylist li[data-id='" + alphabetname + "']").slideDown(300);
        setTimeout(function(){ $("#emergencyAlphabetical ul").removeClass('disabled'); }, 500);
        setTimeout(function(){ $(".emergencyloader").slideUp(200); }, 500);
    });
}
if($("#healthsafetyfaqs").length > 0)
{
    $("#healthsafetyfaqs div aside").click(function()
    {
        let faqname = $(this).attr("data-name");
        $("#healthsafetyfaqs div aside").removeClass("active");
        $("#healthsafetyfaqs div section").slideUp(500);
        $("#healthsafetyfaqs div aside[data-name='" + faqname + "']").addClass("active");
        $("#healthsafetyfaqs div section[data-id='" + faqname + "']").slideDown(500);
    });
}
if($("#emergencycontactToggle").length > 0 && $("#emergencycontactClose").length > 0)
{
    $("#emergencycontactToggle").click(function()
    {
        $("#emergencycontactsearch").animate({left: "0"});
    });
    $("#emergencycontactClose").click(function()
    {
        $("#emergencycontactsearch").animate({left: "100%"});
        $('#emergencycontactinput').val("").trigger("keyup");
    });
}
if($("#gotosafetyfaqs").length > 0 && $("#healthsafetyfaqs").length > 0)
{
    $("#gotosafetyfaqs").click(function()
    {
        $('html, body').animate({scrollTop: $("#healthsafetyfaqs").offset().top  - jumpdiv }, 500);
    });
}


if($("#emergencylist").length > 0)
{
    $('#emergencycontactinput').on('keypress', function (e) 
    {
        if (e.keyCode == '13' || e.charCode == '13') return false;
    });
    $("#emergencycontactinput").keyup(function() {
        selectjob();
    });
    selectjob = function() {
        var designationtitle = $("#emergencycontactinput").val();
        $("#emergencyAlphabetical ul li").removeClass("active");
        $('#emergencylist li').hide();
        var tablerow = $('#emergencylist li').filter(function(index) {
          return ($(this).text().toLowerCase().indexOf(designationtitle.toLowerCase()) >= 0 )
        });
        if(tablerow == '' || tablerow.length == 0)
        {
            $("#emergencynoresult").show();    
        }
        else 
        {
            $("#emergencynoresult").hide();
            tablerow.show();
        }
    }
}
 
$(document).on("change", "#sortemergencycontact", function ()					
{
    $("#emergencylist li").slideDown(300);
    $("#emergencyAlphabetical ul li").removeClass("active");
    
			var shortbyselect = $(this).val();
			var resultdiv = $('#emergencylist li');
					 if (shortbyselect == 'a2z') 
					{
						resultdiv.sort(function(a, b) 
						{
							var x = $(a).data("id").replace(' ', '').toLowerCase();
							var y = $(b).data("id").replace(' ', '').toLowerCase();
							return x < y ? -1 : x > y ? 1 : 0;
						});	
					}
					else if (shortbyselect == 'z2a') 
					{
						resultdiv.sort(function(a, b) 
						{
							var x = $(a).data("id").replace(' ', '').toLowerCase();
							var y = $(b).data("id").replace(' ', '').toLowerCase();
							return x > y ? -1 : x < y ? 1 : 0
						});
					}
                    else 
                    {
                        // nothing
                    }
			$("#emergencylist").html(resultdiv);
});							
/* ############################ Health & Safety === end ############################ */



/* ############################  user review comments === start ############################ */
if($(".replycomments").length > 0)
{
    $(".replycomments").click(function()
    {
        $(this).parent("h3").hide();
        $(this).parent("h3").next(".resources_review_comments").show();
    });
}
/* ############################ user review comments === end ############################ */



/* ############################  resources === start ############################ */
if($(".resources_filter").length > 0)
{
    $(".rt_head").click(function(e)
    {
        e.preventDefault();
        e.stopPropagation();
        if($(this).hasClass("active"))
        {
            $(this).removeClass("active");
            $(this).next(".rt_body").slideUp(300);
        }
        else
        {
            $(this).addClass("active");
            $(this).next(".rt_body").slideDown(300);
        }
    });
    $('body').click(function(e) // close on click body
    {    
        e.stopPropagation();
        if (e.target != $('.rt_head')  || e.target != $('.rt_body')) 
        {
            $(".rt_head").removeClass("active");
            $(".rt_body").slideUp(300);
        }
    });
 }


if($(".resources_pagination").length > 0)
{
    $("#resources_pagination div h2").click(function(e)
    {
        e.preventDefault();
        e.stopPropagation();
        $("#resources_pagination div ul").slideToggle(300);
    });
    $("#resources_pagination div ul li").click(function(e)
    {
        if($(window).width() < 1023)
        {
            e.preventDefault();
            e.stopPropagation();
            $("#resources_pagination div ul").slideUp(300);
            $("#resources_pagination div ul li").removeClass("active");
            $(this).addClass("active");
            var pagenumber = $(this).find("a").text();
            $("#resources_pagination div h2").text(pagenumber);
        }
    });
    $('body').click(function(e) // close on click body
    {    
        e.stopPropagation();
        if($(window).width() < 1023)
        {
            $("#resources_pagination div ul").slideUp(300);
        }
    });
}
 function clearresourcefilter()
 {
    $("#resourcesortby option:selected").prop("selected", false);
    $("#resourcesortby option:first").prop("selected", "selected");
 
    $(".rt_body li input[type='checkbox']").prop('checked',false);
    $(".rt_head").removeClass("active");
    $(".rt_body").slideUp(300);
 }
/* ############################ resources === end ############################ */




 /* ############################  rfc_oem_tabs === start ############################ */
 if($("#rfc_oem_tabs").length > 0)
 {
     $("#rfc_oem_tabs aside").click(function()
     {
         let faqname = $(this).attr("data-name");
         $("#rfc_oem_tabs aside").removeClass("active");
         $("#rfc_oem_tabs section").slideUp(500);
         $("#rfc_oem_tabs aside[data-name='" + faqname + "']").addClass("active");
         $("#rfc_oem_tabs section[data-id='" + faqname + "']").slideDown(500);
     });
 }
 /* ############################  rfc_oem_tabs === start ############################ */




/* ############################  newconnection === start ############################ */
const fileValidation = (fileID) => {
    var filesize = $("#"+fileID)[0].files[0].size;
    var filename = $("#"+fileID)[0].files[0].name;
    if(filesize > 2000000) 
    {
        $("#"+fileID+"-error").show().text("Please upload file less than 2MB");
        
        $(".connection_filename").hide();
        $(".connection_filename b").text("");
    }
    else 
    {
        $(".connection_errormsg").hide().text("");
        $("#"+fileID+"-filename").show();
        $("#"+fileID+"-filename b").text(filename);
    }
}
const detelefile = (val) => {
    $("#document-"+val+"-filename b").text("");
    $("#document-"+val+"-filename").hide();
    $("#document-"+val).val('');
}



if($("#connection_tabs").length > 0 && $("#connection_container").length > 0)
{
    $("#connection_tabs li").click(function(){
        $("#conTabLoader").slideDown(50);
        $("#connection_tabs").addClass("disabled")
        let getname = $(this).attr("data-id");
        $("#connection_tabs li").removeClass("active");
        $("#connection_container .conTabHead").removeClass("active").addClass('disabled');
        $("#connection_container .conTabBody").slideUp(500);

      //  $(".connection_field100").hide(300);
      //  $(".connection_field100[data-id='" + getname + "']").show(300);

        $("#connection_tabs li[data-id='" + getname + "']").addClass("active");
        $("#connection_container .conTabHead[data-id='" + getname + "']").addClass("active");
        $("#connection_container .conTabBody[data-id='" + getname + "']").slideDown(500);
        
        
        setTimeout(function(){ $("#connection_tabs").removeClass('disabled'); }, 500);
        setTimeout(function(){ $("#connection_container .conTabHead").removeClass('disabled'); }, 500);
        setTimeout(function(){ $("#conTabLoader").slideUp(200); }, 600);
    });


    $("#connection_container .conTabHead").click(function()
    {
        let getname = $(this).attr("data-id");
      // $(".connection_field100").hide(300);
      // $(".connection_field100[data-id='" + getname + "']").show(300);

        if($(this).hasClass("active"))
        {
            $("#connection_tabs li").removeClass("active");
            $("#connection_container .conTabHead").removeClass("active").removeClass('disabled');
            $("#connection_container .conTabBody").slideUp(500);
        }
        else 
        {
            $('html, body').animate({scrollTop: $("#connection_container").offset().top  - jumpdiv },500);
            $("#conTabLoader").slideDown(50);
            $("#connection_tabs").addClass("disabled")
            $("#connection_tabs li").removeClass("active");
            $("#connection_container .conTabHead").removeClass("active").addClass('disabled');
            $("#connection_container .conTabBody").slideUp(500);
    
            $("#connection_tabs li[data-id='" + getname + "']").addClass("active");
            $("#connection_container .conTabHead[data-id='" + getname + "']").addClass("active");
            $("#connection_container .conTabBody[data-id='" + getname + "']").slideDown(500);
            
            setTimeout(function(){ $("#connection_tabs").removeClass('disabled'); }, 500);
            setTimeout(function(){ $("#connection_container .conTabHead").removeClass('disabled'); }, 500);
            setTimeout(function(){ $("#conTabLoader").slideUp(200); }, 600);
        }
    });
}
/* ############################  newconnection === start ############################ */

 