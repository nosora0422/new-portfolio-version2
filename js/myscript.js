$(function(){
	
	$(".hamburger").on("click", function(){	
		$('.m-nav-wrapper ul').slideToggle();
		$('.fa-bars').toggle(); 
		$('.fa-xmark').toggle();
	});

    $(".project-list-item1").on('click', function() {
        $('.disc2:not(.disc1)').slideUp();
        $('.disc3:not(.disc1)').slideUp();
        $('.disc4:not(.disc1)').slideUp();
        $('.disc1').slideToggle();
        $('.d-project-thumbnail').css('background-image', 'url(../images/d-project1-thumbnail.jpg)');
    });

    $(".project-list-item2").on('click', function() {
        $('.disc1:not(.disc2)').slideUp();
        $('.disc3:not(.disc2)').slideUp();
        $('.disc4:not(.disc2)').slideUp();
        $('.disc2').slideToggle();
        $('.d-project-thumbnail').css('background-image', 'url(../images/d-project2-thumbnail.jpg)');
        
    });
    $(".project-list-item3").on('click', function() {
        $('.disc1:not(.disc3)').slideUp();
        $('.disc2:not(.disc3)').slideUp();
        $('.disc4:not(.disc3)').slideUp();
        $('.disc3').slideToggle();
        $('.d-project-thumbnail').css('background-image', 'url(../images/d-project3-thumbnail.jpg)');
        
        
    });
    $(".project-list-item4").on('click', function() {
        $('.disc1:not(.disc4)').slideUp();
        $('.disc2:not(.disc4)').slideUp();
        $('.disc3:not(.disc4)').slideUp();
        $('.disc4').slideToggle();
        $('.d-project-thumbnail').css('background-image', 'url(../images/d-project4-thumbnail.jpg)');
        
    });
	
	/* adds a line through clicked li items*/
	// $('.m-nav-wrapper ul li').on("click", function(){
	// 	$(this).toggleClass("complete");
	// });
});


/*Footer component*/

window.addEventListener("load", function() {
        var myFooter = document.createElement('footer');
        document.body.appendChild(myFooter);

        var myFooterWrapper = document.createElement('div');
        myFooterWrapper.classList.add('footer-wrapper');
        myFooter.appendChild(myFooterWrapper);

        var mySmBox = document.createElement('div');
        mySmBox.classList.add('social-media-box');
        myFooterWrapper.appendChild(mySmBox);

        var myInIcon = document.createElement('a');
        myInIcon.classList.add('social-media-icon');
        myInIcon.href = 'http://www.linkedin.com/in/sora-noh';
        myInIcon.target = 'new';
        mySmBox.appendChild(myInIcon);

        var myEmIcon = document.createElement('a');
        myEmIcon.classList.add('social-media-icon');
        myEmIcon.href = 'mailto:nosora0422@gmail.com';
        // myInIcon.target = 'new';
        mySmBox.appendChild(myEmIcon);

        var myGHIcon = document.createElement('a');
        myGHIcon.classList.add('social-media-icon');
        myGHIcon.href = 'http://github.com/nosora0422';
        myGHIcon.target = 'new';
        mySmBox.appendChild(myGHIcon);

        var myIn = document.createElement('i');
        myIn.classList.add('fa-brands', 'fa-linkedin', 'fa-lg', 'icon--gray');
        myInIcon.appendChild(myIn);

        var myEmail = document.createElement('i');
        myEmail.classList.add('fa-solid', 'fa-at', 'fa-lg', 'icon--gray');
        myEmIcon.appendChild(myEmail);

        var myGH = document.createElement('i');
        myGH.classList.add('fa-brands', 'fa-github', 'fa-lg', 'icon--gray');
        myGHIcon.appendChild(myGH);

        var myCopyright = document.createElement('p');
        myCopyright.classList.add('copyright');
        myCopyright.innerText = '\u00A9 Sora Noh 2023';
        myFooterWrapper.appendChild(myCopyright);

        projectClick();
    });


/*Footer Component ends */

/*about banner animation start*/

var aboutH2 = document.querySelectorAll('.about-h2');
var index = 0;
var h2Top = '100%';
function animateH2(){
    // console.log('hi');
    for(var i=0; i < aboutH2.length; i++){
        aboutH2[i].classList.remove('text-in');
    }
    aboutH2[index].classList.add('text-in');

    if(index == aboutH2.length - 1){
            index=0;
    }else{
        index++;
    }
    setTimeout(animateH2, 3000);
}

window.onload=animateH2;

/*about banner animation ends*/

/*Project link start*/

function projectClick(){
    const clickProject1 = document.querySelector('#project1');

    clickProject1.addEventListener('click', function(){
    window.location.href = 'project-detail.html';
});
}

/*Project link ends*/


// var theBody = document.querySelector('body');
// var myCard = document.querySelector('.m-project-card-item');
// var myPointer = document.createElement('div');
// myPointer.classList.add('mouse-pointer');
// theBody.appendChild(myPointer);

// var bounds = theBody.getBoundingClientRect();

// myCard.addEventListener('mousemove', mouseAnim);
// myCard.addEventListener('mouseout', hideMousePointer);


// function mouseAnim(e){
//     var xPos = e.clientX - bounds.left - myPointer.clientWidth / 2;
//     var yPos = e.clientY - bounds.top - myPointer.clientHeight / 2;
//     myPointer.classList.add('mouse-pointer');
//     myPointer.style.display = 'block';
//     myPointer.style.left = xPos +'px';
//     myPointer.style.top = yPos +'px';
// }

// function hideMousePointer() {
//     myPointer.style.display = 'none';
// }


