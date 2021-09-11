window.onload = function()
{
    //Scroll Change NavBar
    window.onscroll=function()
    {
        let navbar =document.querySelector('.navbar');
        if(window.scrollY > 20 )
        {
            navbar.classList.add('sticky');
        }
        else
        {
            navbar.classList.remove('sticky');
        }
        //Scroll Button
        let scrollBtn = document.querySelector('.scroll-up-btn');
        if(window.scrollY > 300 )
        {
            scrollBtn.classList.add('show');
            scrollBtn.addEventListener('click',()=>
            {
                window.scrollTo(0, 0);
            })
        }
        else
        {
            scrollBtn.classList.remove('show');
        }
    }
      
    //Toggle Menu/Navbar Script
    let menuBtn = document.querySelector('.menu-btn');
    let icon = document.querySelector('.menu-btn i');
    let menu = document.querySelector('.menu');
    menuBtn.onclick = function()
    {
        menu.classList.toggle('active');
        icon.classList.toggle('active');
    }
    //owl Carousel Script
    $('.carousel').owlCarousel({
        margin:20,
        loop : true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive:
        {
            0:{
                items: 1,
                nav :false
            },
            600:{
                items: 2,
                nav :false
            },
            1000:{
                items: 3,
                nav :false
            }
        }
    }); 
    //Typing Animation Script 
    let typed = new Typed(".typing", {
        strings : ["frontend" , "Developer" , "Designer" , "Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop : true
    });
    let typed1 = new Typed(".typing-2", {
        strings : ["frontend" , "Developer" , "Designer" , "Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop : true
    })
}


$(document).ready(function(){
    $("#contactus-submit").click(function(){
    var r= $('<i class="fa fa-spinner fa-spin"></i>');
    $("#contactus-submit").html(r);
    $("#contactus-submit").append(" Sending...");
    $("#contactus-submit").attr("disabled", true);
    
    
    setTimeout(function(){
    $("#contactus-submit").attr("disabled", false);
    $("#contactus-submit").html('Send');
    
    }, 3000);
    
    
    });
    });