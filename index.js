const ryanPic = document.querySelectorAll('.slide-in');
const navBar = document.querySelectorAll('.slide-in1');
const services = document.querySelectorAll('.fade-in');



const appearOptions = {
	threshold: 0,
	rootMargin: "0px 0px -500px 0px"
};

const appearOnScroll = new IntersectionObserver
	(function (
		entries,
		appearOnScroll
	) {
		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				return;
			} else {
				entry.target.classList.add("appear");
			}
		});
	},
		appearOptions);
		
setTimeout(function () {
	ryanPic.forEach(slider => {
		appearOnScroll.observe(slider);
	});
}, (2100));

navBar.forEach(slider => {
	appearOnScroll.observe(slider);
});


	services.forEach(slider => {
		appearOnScroll.observe(slider);
	});





/*ADD-REMOVE*/
const sectionTwo = document.querySelector('.slideup');


const sectionTwoOptions = {
rootMargin: "0px 0px -225px 0px"
};

const sectionTwoObserver = new IntersectionObserver
(function(
  entries,
  sectionTwoObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      sectionTwo.classList.remove("add");
	
		  
    } else {
     sectionTwo.classList.add("add"); 


    }
  });
},
sectionTwoOptions);
sectionTwoObserver.observe(sectionTwo);




/*WHAT IDO*/
const sectionThree1 = document.querySelector('.whatido-info1');
const sectionThree2 = document.querySelector('.whatido-info2');
const sectionThree3 = document.querySelector('.whatido-info3');
const sectionThree4 = document.querySelector('.whatido-info4');
const sectionThree5 = document.querySelector('.body');
const sectionThreeOptions = {


rootMargin: "0px 0px -300px 0px"
};

const sectionThreeObserver = new IntersectionObserver
(function(
  entries,
  sectionThreeObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
		sectionThree1.classList.remove("add"); 
		sectionThree2.classList.remove("add"); 
		sectionThree3.classList.remove("add"); 
		sectionThree4.classList.remove("add"); 
		  
    } else {
     sectionThree1.classList.add("add"); 
	 sectionThree2.classList.add("add"); 
	 sectionThree3.classList.add("add"); 
	 sectionThree4.classList.add("add"); 
	 


    }
  });
},
sectionThreeOptions);
sectionThreeObserver.observe(sectionThree5);



$('.autoplay').slick({
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	autoplay:true,
	dots:true,
	responsive: [

	  {
		breakpoint: 1137,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 800,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });




  const header = document.querySelector('.nav-bar');
const sectionOne = document.querySelector('.cover');
const sectionOneOptions = {
rootMargin: "-922px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver
(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("add");
	
		  
    } else {
      header.classList.remove("add"); 


    }
  });
},
sectionOneOptions);
sectionOneObserver.observe(sectionOne);


const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	
	burger.addEventListener('click',() => {
		nav.classList.toggle('nav-active');

		navLinks.forEach((link,index) => {
			if(link.style.animation){
			   link.style.animation = '';
			   link.style.display = '';		   
			}else{
				link.style.animation = `navLinkFade 0.1s ease forwards ${index / 19 + 0.1}s`; 
				link.style.display = 'block';	
			}
		});
	//burger Animation
	burger.classList.toggle('toggle');

  });
}
navSlide();




window.addEventListener('scroll',function(){
	var scroll = document.querySelector('.scrollTop');
	scroll.classList.toggle("active" , window.scrollY > 500)
})



function scrollToTop(){
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}



var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "106573801728847");
chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function() {
  FB.init({
	xfbml            : true,
	version          : 'v11.0'
  });
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

