const moment = require("moment") // For date formatting

document.addEventListener('DOMContentLoaded', () => {

    const steps = document.querySelectorAll('.egg-steps p')
    const mintext = document.querySelectorAll('.egg-notes .mintex')
    const textbody = document.querySelectorAll('.egg-notes textarea')

    for (const step of steps){
        step.addEventListener('click', () => {
            step.classList.toggle("complete")
        })
    }

    for(const mintexts of mintext){
        mintexts.addEventListener('click', () => {
            mintexts.classList.toggle("minimise")
        })
    }

    textbody.addEventListener('click', () => {
        textbody.classList.toggle("minimise")
    })

    // Get the current yeaer
    document.getElementById('is-year').innerHTML = moment().year();

})
