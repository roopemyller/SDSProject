// Select DOM items

const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');

const navItems = document.querySelectorAll('.nav-item');

//  Set init state of menu false (close)

let showMenu = false;

menuButton.addEventListener('click', toggleMenu);
function toggleMenu(){
    if(!showMenu){
        menuButton.classList.add('close');
        menu.classList.add('show');
        menuBranding.classList.add('show');
        menuNav.classList.add('show');

        navItems.forEach(item => item.classList.add('show'))

        // Set menu state
        showMenu = true;


    }else{
        menuButton.classList.remove('close');
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        menuNav.classList.remove('show');

        navItems.forEach(item => item.classList.remove('show'))

        // Set menu state
        showMenu = false;
    }
}





