document.addEventListener('DOMContentLoaded', () => {

     //This stores the initial scroll position
     let lastScrollY = window.scrollY;
     //Gets the initial background color
     // const initialBGColor = getComputedStyle(header).backgroundColor;
     
     window.addEventListener('scroll', () => {
 
         const header = document.querySelector('header');
         const pageNav = document.querySelector('.page-nav');
         const currentScroll = window.scrollY;
 
         //Determines scroll direction: Up or Down
         const isScrollingDown = currentScroll > lastScrollY;
 
         //Adjust opacity based on scrolling up or down
         header.style.opacity = (isScrollingDown) ? '0' : '1';
         // pageNav.style.opacity = (isScrollingDown) ? '0' : '1';
 
         //Adjust visibility based on scrolling up or down
         header.style.visibility = (isScrollingDown) ? 'hidden' : 'visible';
         // pageNav.style.visibility = (isScrollingDown) ? 'hidden' : 'visible';
 
         //Move the header up down based on scrolling up or down
         // header.style.transform = (isScrollingDown) ? 'translateY(-100%)' : 'translateY(0)';
 
         //Update the scroll position to the current position
         lastScrollY = currentScroll;
 
     })

});