const myAnimation = document.querySelectorAll('.box-animation');
const myConIcon = document.querySelectorAll('.contact-icon');

const aniObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation');
        }
    })
},
   {
    threshold: 0.5
   });

  for (let i = 0; i < myAnimation.length; i++) {
    const elements = myAnimation[i];
    aniObserver.observe(elements);
  } 

const conObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        const delay = index * 200;
        if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${delay}ms`;
            entry.target.classList.add('contact-scroll-animation');
        }
    })
},
   {
    threshold: 0.5
   });

  for (let i = 0; i < myConIcon.length; i++) {
    const eachIcon = myConIcon[i];
    conObserver.observe(eachIcon);
  } 