function handleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const menu = document.querySelector('.menu-list');
 
    menuIcon.addEventListener('click', () => {
        closeIcon.classList.remove('hide');
        menuIcon.classList.add('hide');
        menu.classList.add('show');
        document.body.classList.add('fixed');
    });

    closeIcon.addEventListener('click', () => {
        closeIcon.classList.add('hide');
        menuIcon.classList.remove('hide');
        menu.classList.remove('show');
        document.body.classList.remove('fixed');
    });

    
}

export default handleMenu;