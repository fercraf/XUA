// javascript Animate onscroll Start
$(document).ready(function () {
    if (screen.width > 1024) {
        AOS.init({
            easing: 'ease-in-out-sine',
            once: true,
        });
    }
});
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(function () {
    var navMain = $(".navbar-collapse");

    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});
//nav
$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});
$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const greetingMessageElement = document.getElementById('greetingMessage');
    const whatsappLinkElement = document.getElementById('whatsappLink');
    const phoneNumber = '5730000000';

    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = '¡Hola, buenos días!';
    } else if (hours < 18) {
        greeting = '¡Hola, buenas tardes!';
    } else {
        greeting = '¡Hola, buenas noches!';
    }

    const fullMessage = `${greeting}<br>Deseo contactarme con ustedes!<br>`;
    greetingMessageElement.innerHTML = fullMessage;

    // Prepare the message for WhatsApp link
    const whatsappMessage = encodeURIComponent(`¡Hola, ${greeting.split(', ')[1]}\nDeseo contactarme con ustedes!`);
    whatsappLinkElement.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;
});