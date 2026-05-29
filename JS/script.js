const navLinks = document.querySelectorAll('.navLink');
const underline = document.querySelector('.underline');

navLinks.forEach( (navLink) => {
   navLink.addEventListener('click', ()=>{
    removeActiveClass();
    navLink.classList.add("active");
    moveUnderline(navLink);
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