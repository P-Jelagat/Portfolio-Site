const navLinks = document.querySelectorAll('.navLink');
const underline = document.querySelector('.underline');


// THIS IS FOR THE UNDERLINE MOVEMENT ALONG THE NAVBAR
navLinks.forEach( (navLink, index) => {
   navLink.addEventListener('click', (e)=>{
    e.preventDefault();
    removeActiveClass();
    navLink.classList.add("active");
    moveUnderline(navLink);
    changePage(index);
   })

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