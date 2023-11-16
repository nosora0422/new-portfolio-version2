$(function(){
	
	$(".hamburger").on("click", function(){	
		$('.m-nav-wrapper ul').slideToggle();
		$('.fa-bars').toggle(); 
		$('.fa-xmark').toggle();
	});
	
	/* adds a line through clicked li items*/
	// $('.m-nav-wrapper ul li').on("click", function(){
	// 	$(this).toggleClass("complete");
	// });
});


/*Footer component*/

// document.addEventListener("DOMContentLoaded", function() {
//         // var myFooter = document.querySelector('footer');
//         var myFooter = document.createElement('footer');
//         document.body.appendChild(myFooter);

//         var myFooterWrapper = document.createElement('div');
//         myFooterWrapper.classList.add('footer-wrapper');
//         myFooter.appendChild(myFooterWrapper);

//         var mySmBox = document.createElement('div');
//         mySmBox.classList.add('social-media-box');
//         myFooterWrapper.appendChild(mySmBox);

//         var myInIcon = document.createElement('a');
//         myInIcon.classList.add('social-media-icon');
//         myInIcon.href = 'http://www.linkedin.com/in/sora-noh';
//         myInIcon.target = 'new';
//         mySmBox.appendChild(myInIcon);

//         var myEmIcon = document.createElement('a');
//         myEmIcon.classList.add('social-media-icon');
//         myEmIcon.href = '#';
//         // myInIcon.target = 'new';
//         mySmBox.appendChild(myEmIcon);

//         var myGHIcon = document.createElement('a');
//         myGHIcon.classList.add('social-media-icon');
//         myGHIcon.href = 'http://github.com/nosora0422';
//         myGHIcon.target = 'new';
//         mySmBox.appendChild(myGHIcon);

//         var myIn = document.createElement('i');
//         myIn.classList.add('fa-brands', 'fa-linkedin', 'fa-lg', 'icon--gray');
//         myInIcon.appendChild(myIn);

//         var myEmail = document.createElement('i');
//         myEmail.classList.add('fa-solid', 'fa-at', 'fa-lg', 'icon--gray');
//         myEmIcon.appendChild(myEmail);

//         var myGH = document.createElement('i');
//         myGH.classList.add('fa-brands', 'fa-github', 'fa-lg', 'icon--gray');
//         myGHIcon.appendChild(myGH);

//         var myCopyright = document.createElement('p');
//         myCopyright.classList.add('copyright');
//         myCopyright.innerText = '\u00A9 Sora Noh 2023';
//         myFooterWrapper.appendChild(myCopyright);
//     });


/*Footer Component ends */
