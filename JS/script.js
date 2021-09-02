// $('h1').css('color', 'blue')
$(document).ready(function() {
    $('#menu-btn').click(function(){
        $('.navbar').toggleClass('active')
        $('.login-form').removeClass('active')
        $('.search-form').removeClass('active')
    })

    // login 
    $('#login-btn').click(function(){
        $('.login-form').toggleClass('active')
        $('.search-form').removeClass('active')
        $('.navbar').removeClass('active')
    })

    //search
    $('#search-btn').click(function(){
        $('.search-form').toggleClass('active')
        $('.login-form').removeClass('active')
        $('.navbar').removeClass('active')
    })

    $(window).scroll(function(){
        $('.login-form').removeClass('active')
        $('.search-form').removeClass('active')
        $('.navbar').removeClass('active')
    })
   

    
})

let themeBtn = document.querySelector('#theme-btn')

themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun')

    if(themeBtn.classList.contains('fa-sun')) {
        document.body.classList.add('active')
    }
    else {
        document.body.classList.remove('active')
    }
}