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
            const letter = item.getAttribute('data-letter').toLowerCase();
            const accordionContents = item.querySelectorAll('.accordion-content');
            const contentGroup = item.querySelector('.accordion-content-group');
            let hasVisibleContent = false;
    
            // If the first letter in the search term matches, then show the accordion item
            if (letter.startsWith(searchTerm)) {

                // Remove the display: none from all the P tags with ".accordion-content" class
                accordionContents.forEach(content => {
                    content.style.display = '';
                });

                // Expand the accordion item so it shows the content and rotate the symbol so it shows "X"
                contentGroup.classList.add('active-accordion');
                item.classList.add('rotate-symbol');
                hasVisibleContent = true;
                
            } else {
                // If letter doesn't match, check each .accordion-content item
                accordionContents.forEach(content => {
                    const contentText = content.textContent.toLowerCase();

                    // If the P tag with the .accordion-content class contains the search term, then show the P tag, 
                    // Else, hide it
                    if (contentText.includes(searchTerm)) {
                        content.style.display = '';
                        hasVisibleContent = true;
                        contentGroup.classList.add('active-accordion');
                        item.classList.add('rotate-symbol');
                    } else {
                        content.style.display = 'none';
                    }

                });
            }
    
            // Hide the entire accordion item based on whether it has any visible content
            if (!hasVisibleContent) {
                item.style.display = 'none';
                contentGroup.classList.remove('active-accordion');
                item.classList.remove('rotate-symbol');
            }
        });
    });

});