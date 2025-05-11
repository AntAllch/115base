document.addEventListener('DOMContentLoaded', () => {

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    //adds an event listener to the search input which triggers a function when either the search input is empty 
    //or the user begins typing
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
    
        // If the search bar is empty
        if (!searchTerm) {
            accordionItems.forEach(item => {
                const contentGroup = item.querySelector('.accordion-content-group');
                const accordionContents = item.querySelectorAll('.accordion-content');

                item.style.display = '';
                item.classList.remove('rotate-symbol');

                contentGroup.classList.remove('active-accordion');
                accordionContents.forEach(content => content.style.display = '');
            });
            return;
        }
    
        // If the search term is not empty, then show the accordion item based on the search term
        accordionItems.forEach(item => {
            const accordionContents = item.querySelectorAll('.accordion-content');
            const contentGroup = item.querySelector('.accordion-content-group');
            let hasVisibleContent = false;

            // First, reset the display state of all content items
            accordionContents.forEach(content => {
                content.style.display = '';
            });
    
            // Check each .accordion-content item
            accordionContents.forEach(content => {
                const spanText = content.querySelector('.ac-span-bold').textContent.toLowerCase();

                // If the span with the .ac-span-bold class starts with the search term, then show the P tag, 
                // Else, hide it
                if (spanText.startsWith(searchTerm)) {
                    hasVisibleContent = true;
                    contentGroup.classList.add('active-accordion');
                    item.classList.add('rotate-symbol');
                } else {
                    content.style.display = 'none';
                }
            });
    
            // Hide the entire accordion item based on whether it has any visible content
            if (!hasVisibleContent) {
                item.style.display = 'none';
                contentGroup.classList.remove('active-accordion');
                item.classList.remove('rotate-symbol');
            } else {
                item.style.display = '';
            }
        });
    });

});