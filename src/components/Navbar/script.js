function handleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const menu = document.querySelector('.menu-list');
 
    menuIcon.addEventListener('click', () => {
        closeIcon.classList.remove('hide-d');
        menuIcon.classList.add('hide-d');
        menu.classList.add('show-d');
        document.body.classList.add('fixed');
    });

    closeIcon.addEventListener('click', () => {
        closeIcon.classList.add('hide-d');
        menuIcon.classList.remove('hide-d');
        menu.classList.remove('show-d');
        document.body.classList.remove('fixed');
    });   
}

function handleMouseEnter() {
    const dropdownbg = document.querySelector('.dropdownbg');
    const dropdown = this.querySelector('.dropdown');

    const coords = dropdown.getBoundingClientRect();

    dropdown.classList.remove('hide');
    dropdownbg.classList.remove('hide');

    dropdownbg.style.setProperty('width', `${coords.width}px`);
    dropdownbg.style.setProperty('height', `${coords.height}px`);
    dropdownbg.style.setProperty('transform', `translate(${coords.x}px, ${coords.y}px)`);
}

function handleMouseLeave() {
    const dropdownbg = document.querySelector('.dropdownbg');
    const dropdown = this.querySelector('.dropdown');

    dropdown.classList.add('hide');
    dropdownbg.classList.add('hide');
}

function handleDropdown() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => item.addEventListener('mouseenter', handleMouseEnter));
    menuItems.forEach(item => item.addEventListener('mouseleave', handleMouseLeave));
}

export { handleMenu, handleDropdown};