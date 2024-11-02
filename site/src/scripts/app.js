const moment = require("moment") // For date formatting

document.addEventListener('DOMContentLoaded', () => {

    const steps = document.querySelectorAll('.egg-steps p')
    const closeNoteBtn = document.querySelector('.egg-notes .mintex')
    const eggNotes = document.querySelector('.egg-notes')
    const textbody = eggNotes.querySelector('textarea')
    const eggSteps = document.querySelector('.egg-steps')
    let noteState = false
    console.log(`Note State: ${noteState}`)

    for (const step of steps){
        step.addEventListener('click', () => {
            step.classList.toggle("complete")
        })
    }


    // If notestate is true, display "Close" otherwise display "Open"
    closeNoteBtn.textContent = noteState ? "Minimise" : "Expand"

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

    // Get the current yeaer
    // document.getElementById('is-year').innerHTML = moment().year();





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


})
