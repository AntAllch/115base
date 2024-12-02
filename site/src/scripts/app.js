const moment = require("moment") // For date formatting
import { terminusCalculator } from "./terminuscalc"

document.addEventListener('DOMContentLoaded', () => {

    const egg = document.querySelector('.egg');

    if (egg){

        // alert('app.js is loaded');
        // console.log(`The path is: localhost:8080${path}`);
    
        const steps = document.querySelectorAll('.egg-steps p');
        const closeNoteBtn = document.querySelector('.egg-notes .mintex');
        const eggNotes = document.querySelector('.egg-notes');
        const textbody = document.querySelector('textarea');
        const eggSteps = document.querySelector('.egg-steps');
        let noteState = false;
        console.log(`Note State: ${noteState}`);
    
        for (const step of steps){
            step.addEventListener('click', () => {
                step.classList.toggle("complete")
            })
        }
    
    
        // If notestate is true, display "Close" otherwise display "Open"
        closeNoteBtn.textContent = noteState ? "Minimise" : "Expand"
    
        if (document.querySelector('.terminus-calculator')) {
            console.log ('running terminus calc')
            terminusCalculator();
        }
    
        // Initial state of the note area
        if (!noteState) {
            textbody.classList.add("minimise") 
        }
        
        // toggle textarea height (notes for egg)
        closeNoteBtn.addEventListener('click', () => {
            noteState = !noteState
            closeNoteBtn.textContent = noteState ? "Minimise" : "Expand"
            textbody.classList.toggle("minimise") 
        })

    }
    

    // Get the current yeaer
    // document.getElementById('is-year').innerHTML = moment().year();


    // ------------------------ MOVING HEADER -------------------------

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
        
        

        //Adjust background colors based on scrolling up or down
        // header.style.backgroundColor = (isScrollingDown) ? 'rgba(255, 255, 255, 0.05)' : 'rgba(10, 10, 45, 0.5)';
        // pageNav.style.backgroundColor = (isScrollingDown) ? 'rgba(255, 255, 255, 0.1)' : 'rgba(13, 13, 58, 0.7)';



    })

    // ----------------------------------------------------------------

    // ----------------- ADJUSTING SCROLL TO POSITION -----------------

    document.querySelectorAll('.page-nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            //Prevent default acnhor behaviour
            e.preventDefault();

            //Get the target ID
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            //Adjust this value based on the header height + extra space
            const headerOffset = 150;
            //Get the position relative to viewport
            const elementPosition = targetElement.getBoundingClientRect().top;
            //Calculate adjusted scroll position
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // ---------------------------------------------------------------------

    // ---- CHANGING HEADER COLOUR BASED ON POSITION FROM TOP OF WINDOW -------

    document.addEventListener('scroll', () => {
        const header = querySelector('header');
        const scrollThreshold = 100;

        if (windows.scrollY > scrollThreshold){
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ------------------------------------------------------------------------

    // ----------------- MOBILE NAV -----------------
    
    const hamburger = document.querySelector('.hamburger');
    const close = document.querySelector('.close');

    hamburger.addEventListener('click', () => {
        document.querySelector('.mobile-nav').classList.toggle('open');
        console.log('hamburger clicked');
        hamburger.style.display = 'none';
        close.style.display = 'block';
    });

    close.addEventListener('click', () => {
        document.querySelector('.mobile-nav').classList.remove('open');
        console.log('close clicked');
        close.style.display = 'none';
        hamburger.style.display = 'block';

    });

    // ---------------------------------------------------------------------

    // Function to check the position of block1 relative to block2
    // function checkPosition(block1, block2) {
    //     const block1Rect = block1.getBoundingClientRect();
    //     const block2Rect = block2.getBoundingClientRect();

    //     // Save the current scroll position
    //     const currentScroll = window.scrollY;

    //     // // Check if the bottom of block1 reaches the top of block2
    //     if (block1Rect.bottom >= block2Rect.top) {
    //         block1.classList.add('minimise'); // Add class if condition is met
    //     } else {
    //         block1.classList.remove('minimise'); // Remove class if condition is not met
    //     }

    //     // Reset scroll position to maintain the original scroll value
    //     window.scrollTo(0, currentScroll);
    // }

    // // Listen for the scroll event
    // window.addEventListener('scroll', () => {
    //     checkPosition(textbody, eggSteps);
    // });

    // // Optionally, run the check once on load in case blocks are initially in position
    // checkPosition(textbody, eggSteps);


});
