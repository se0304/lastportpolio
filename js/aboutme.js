// $(function(){
//     setTimeout(function(){
//         $(".mySwiper").attr({'autoplay-delay':"1500"})
//     },12000)
    
// })

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    speed:1800,
    autoplay: {
      delay: 1500,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    }
  });

swiper.autoplay.stop();
setTimeout(()=>{
  swiper.autoplay.start();
},11200)
