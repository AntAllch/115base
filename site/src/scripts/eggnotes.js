document.addEventListener('DOMContentLoaded', () => {

    const egg = document.querySelector('.egg');

    if (egg){
    
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

});