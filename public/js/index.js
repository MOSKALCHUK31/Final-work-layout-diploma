var menu = false;

$(".page header i").on("click", function(){
  if (menu == true) {
    $(".page").css("width","100%");
    $(".menu").css("width","0%");
    menu = false;
  }
  else if (menu == false) {
    $(".page").css("width","75%");
    $(".menu").css("width","20%");
    menu = true;
  }
});

// console.log(innerWidth);
