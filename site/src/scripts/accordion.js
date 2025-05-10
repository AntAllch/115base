document.addEventListener('DOMContentLoaded', function() {
    
    // Accordion functionality
    const titleBar = document.querySelectorAll('.accordion-title');
    
    titleBar.forEach(title => {
        title.addEventListener('click', () => {
            const accordionItem = title.closest('.accordion-item');
            const accordionContentGroup = accordionItem.querySelector('.accordion-content-group');

            accordionItem.classList.toggle('rotate-symbol');
            accordionContentGroup.classList.toggle('active-accordion');
            console.log(accordionContentGroup.classList);
        }); 
    });

});
