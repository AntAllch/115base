const moment = require("moment") // For date formatting

document.addEventListener('DOMContentLoaded', () => {

    const steps = document.querySelectorAll('.egg-steps p')

    for (const step of steps){
        step.addEventListener('click', () => {
            step.classList.toggle("complete")
        })
    }

    // Get the current yeaer
    document.getElementById('is-year').innerHTML = moment().year();

})
