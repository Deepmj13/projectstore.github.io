searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
	searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () =>{
	loginForm.classList.toggle('active');
}
let closeForm = document.querySelector('.login-form-container');
document.querySelector('#close').onclick = () =>{
	closeForm.classList.remove('active');
}

window.onscroll = () =>{
	searchForm.classList.remove('active');


	if(window.scrollY > 80){
		document.querySelector('.header .header-2').classList.add('active');
	}else{
		document.querySelector('.header .header-2').classList.remove('active');
	}
}
window.onload = () =>{
	if(window.scrollY > 80){
		document.querySelector('.header .header-2').classList.add('active');
	}else{
		document.querySelector('.header .header-2').classList.remove('active');
	}
}

    var swiper = new Swiper(".books-slider", {
      loop:true,
      centeredslides: true,
      autoplay: {
      	delay:2000,
      	disableOnInteraction:false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
         
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });



   	var swiper = new Swiper(".featured-slider", {
      loop:true,
      centeredslides: true,
      navigation: {
      	nextEl:".swiper-button-next",
      	prevEl:".swiper-button-prev"
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
         
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });




