
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    const navbarHeight = document.querySelector(".fixed-top").offsetHeight;

    window.scrollTo({
      top: targetElement.offsetTop - navbarHeight,
      behavior: "smooth",
    });
  });
});


$(document).ready(function(){
  if($(window).width() < 992){
    $("#main-menu>.navbar").addClass("animate-menu-w");
    $("#logo").attr("src", "assets/logo/logo-o.png");
  } else {
    if ($(window).scrollTop() > 50) {
      $("#main-menu>.navbar").addClass("animate-menu-w");
      $("#logo").attr("src", "assets/logo/logo-o.png");
    } else {
      $("#main-menu>.navbar").removeClass("animate-menu-w");
      $("#logo").attr("src", "assets/logo/logo-w.png");
    }
  }
});


AOS.init();
