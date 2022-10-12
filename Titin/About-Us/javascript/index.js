var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

 var clicked = false;
 function toggle1(){
      if(!clicked){
        clicked = true;
        document.getElementById("btn").innerHTML="About Candidate College";
        document.getElementById("output1").innerHTML="Candidate College is an education platform organization that works to facilitate students in Indonesia at home and abroad to achieve a quality education system";
      }
      else{
        clicked = false;
        document.getElementById("btn").innerHTML="About Candidate College";
        document.getElementById("output1").innerHTML="";
      }
    }
    
    var clicked = false;
    function toggle2(){
         if(!clicked){
           clicked = true;
           document.getElementById("visi").innerHTML="Vision Candidate College";
           document.getElementById("output2").innerHTML="Vision of Candidate College is to achieve quality equally for all Indonesian students at home and abroad";
         }
         else{
           clicked = false;
           document.getElementById("visi").innerHTML="Vision Candidate College";
           document.getElementById("output2").innerHTML="";
         }
       }
  
       var clicked = false;
    function toggle3(){
         if(!clicked){
           clicked = true;
           document.getElementById("misi").innerHTML="Mission Candidate College";
           document.getElementById("output3").innerHTML="Mission of Candidate College is to achieve quality equally for all Indonesian students at home and abroad";
         }
         else{
           clicked = false;
           document.getElementById("misi").innerHTML="Mission Candidate College";
           document.getElementById("output3").innerHTML="";
         }
       }
  