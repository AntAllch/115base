document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.hamburger');
    const close = document.querySelector('.close');
    const dropdowns = document.querySelectorAll('.mobile-nav-item.dropdown');
    const mobileNav = document.querySelector('.mobile-nav');
    
    hamburger.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
        hamburger.style.display = 'none';
        close.style.display = 'block';
    });
    
    close.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        close.style.display = 'none';
        hamburger.style.display = 'block';
        
    });
    
    dropdowns.forEach(dropdown => {
        const subItems = dropdown.querySelectorAll('.sub-item');
        const downArrow = dropdown.querySelector('.down-arrow');
        
        dropdown.addEventListener('click', () => {
            dropdown.classList.toggle('expanded');
            downArrow?.classList.toggle('rotate');
    
            subItems.forEach(subItem => {
                subItem.classList.toggle('visible');
            });
        }); 
    });

});