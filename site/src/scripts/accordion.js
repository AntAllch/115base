const titleBar = document.querySelectorAll('.accordion-title');

titleBar.forEach(title => {
    
    title.addEventListener('click', () => {
        
        const accordionItem = title.closest('.accordion-item');
        const currentHeight = accordionItem.style.height;
        
        if (currentHeight === 'auto' || !currentHeight) {
            accordionItem.style.height = '44px';
        } else {
            accordionItem.style.height = 'auto';
        }

    });

});


