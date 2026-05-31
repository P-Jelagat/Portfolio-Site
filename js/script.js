const navLinks = document.querySelectorAll('.navLink');
const underline = document.querySelector('.underline');


// THIS IS FOR THE UNDERLINE MOVEMENT ALONG THE NAVBAR
navLinks.forEach( (navLink, index) => {
    if(window.innerWidth > 600){
    navLink.addEventListener('click', (e)=>{
    e.preventDefault();
    removeActiveClass();
    navLink.classList.add("active");
    moveUnderline(navLink);
    changePage(index);
   })
    }


});

const removeActiveClass = () => {
    navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
    })
}
function moveUnderline(navLink){
    underline.style.width = `${navLink.offsetWidth}px`;
    underline.style.transform= `translateX(${navLink.offsetLeft}px)`;
}

moveUnderline(document.querySelector('.active'));


// THIS IS FOR THE PAGE TRANSITIONS

const pages = document.querySelectorAll('.page');
let currentIndex = 0;

function changePage(newIndex){

    const currentPage = pages[currentIndex];
    const nextPage = pages[newIndex];

    currentPage.classList.remove('activePage');
    nextPage.classList.add('activePage');

    const nextContent = nextPage.querySelector('.pageContent');
    nextContent.classList.remove('fromLeft', 'fromRight', 'showPage');
    
    if(newIndex > currentIndex){
        nextContent.classList.add('fromRight');
    }else{
        nextContent.classList.add('fromLeft');
    }

    void nextContent.offsetWidth;

    nextContent.classList.add('showPage');
     currentIndex = newIndex;

}


/* INITIAL UNDERLINE POSITION */

moveUnderline(
    document.querySelector('.active')
);


// CREATING THE DROP-DOWN MENU ON SMALLER SCREENS WHEN MENU BUTTON IS CLICKED
 const menuBtn = document.querySelector('.menuBtn');
 const mobileMenu = document.createElement('div');

 mobileMenu.classList.add('mobileMenu');

 mobileMenu.innerHTML = `
    <a href="#home" class="navLink" data-page="0">Home</a>
    <a href="#aboutMe" class="navLink" data-page="1">About Me</a>
    <a href="#projectsPage" class="navLink" data-page="2">Projects</a>
    <a href="#contact" class="navLink" data-page="3">Contact Me</a>
`;

document.body.appendChild(mobileMenu);


menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
})

// TO CLOSE MENU WHEN YOU TAP OUTSIDE IT
document.addEventListener('click', (e)=>{

    const clickedMenu =
    mobileMenu.contains(e.target);

    const clickedMenuBtn =
    menuBtn.contains(e.target);

    if(
        !clickedMenu &&
        !clickedMenuBtn
    ){
        mobileMenu.classList.remove('open');
    }

});