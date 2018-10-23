$(function(){

  const responsiveNav = "<nav><a href='#'>Home</a><a href='#'>Resumé</a><a href='#'>Portfolio</a><a href='#'>About</a><a href='#'>Blog</a><a href='#'>Contact</a><br></nav>"

  const menu = $("#hamburger")
  const menuDiv = $(".responsive-menu")

  menuDiv.empty()

  menu.click(function(){
    if (menuDiv.html() === "") {
      menuDiv.addClass("responsive-menu-toggled")
      menuDiv.html(responsiveNav)
      $(".hero").hide()
      $(window).resize(function(){
        if ($(window).width() > 768) {
          $(".hero").show()
          menuDiv.removeClass("responsive-menu-toggled")
          menuDiv.empty()
        }
      })
    }
    else {
      menuDiv.removeClass("responsive-menu-toggled")
      menuDiv.empty()
      $(".hero").show()
    }
  })

  $(window).scroll(function(){
    const header = $('.header');
    const scroll = $(window).scrollTop();
    const hero = $(".hero");
    const nav = $("nav")
  
    const scrolledHeader = "<a href='#'>Home</a><a href='#'>Resumé</a><a href='#'>Portfolio</a><a href='#'>About</a><a href='#'>Blog</a><a href='#'>Contact</a>"
  
    const unscrolledHeader = "<div class='side-nav left-nav'><a href='#'>Home</a><a href='#'>Resumé</a><a href='#'>Portfolio</a></div><div class='side-nav'><h3>full stack web developer<br>&<br>designer</h3></div><div class='side-nav right-nav'><a href='#'>About</a><a href='#'>Blog</a><a href='#'>Contact</a></div>"
  
    if (scroll >= 300 && $(window).width() > 768) {
      nav.html(scrolledHeader)
      header.addClass('fixed') 
      $("nav").addClass("scrolled-nav")
      hero.addClass("shift-hero");
    }
    else if (scroll <= 300 && $(window).width() > 768 ) {
      header.removeClass('fixed');
      hero.removeClass("shift-hero");
      $("nav").removeClass("scrolled-nav")
      nav.html(unscrolledHeader)
    
  }
  });
})




