const navLinks = document.querySelectorAll('.navLink');
const underline = document.querySelector('.underline');

navLinks.forEach( (navLink) => {

    navLink.classList.toggle("active");

    navLink.addEventListener('click', () =>{
        moveUnderline(navLink);
        changePage();

    } );
});


function moveUnderline(navLink){
    underline.style.width = `${navLink.offsetWidth}px`;
    underline.style.transform= `translateX(${navLink.offsetLeft}px)`;
}