const titleBar = document.querySelectorAll('.accordion-title');

titleBar.forEach(title => {
    
    title.addEventListener('click', () => {
        
        const accordionItem = title.closest('.accordion-item');
              accordionItem.classList.toggle('rotate-symbol');

        const accordionContentGroup = accordionItem.querySelector('.accordion-content-group');
              accordionContentGroup.classList.toggle('active-accordion');
              console.log(accordionContentGroup.classList);

    });

});


