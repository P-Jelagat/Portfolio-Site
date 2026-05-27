const links = document.querySelectorAll(".navLink");
const sections = document.querySelectorAll(".section");
const underline = document.querySelector(".underline");

let currentIndex = 0;

//Places underline on home link
moveUnderline(links[0]);

links.forEach((link,index) => {
    link.addEventListener("click", () => {
        moveUnderline(link);
        switchSection(index);
    });
});

function moveUnderline(link){
    underline.style.width = `${link.offsetWidth}px`;
    underline.style.left = `${link.offsetLeft}px`;
};


function switchSection(newIndex){

    if(newIndex === currentIndex) return;

    const currentSection = sections[currentIndex];
    const nextSection = sections[newIndex];

    const movingRight = newIndex > currentIndex;

    // Remove old animation classes
    nextSection.classList.remove("slideLeft", "slideRight");

    // Disable transition temporarily
    nextSection.style.transition = "none";

    // Set incoming direction
    nextSection.classList.add(
        movingRight ? "slideRight" : "slideLeft"
    );

    nextSection.style.opacity = "1";

    // Force repaint
    nextSection.offsetHeight;

    // Re-enable transition
    nextSection.style.transition = "0.5s ease";

    // Animate current section out
    currentSection.style.transform =
        movingRight
        ? "translateX(-100%)"
        : "translateX(100%)";

    currentSection.style.opacity = "0";

    // Bring next section into view
    nextSection.style.transform = "translateX(0)";

    currentIndex = newIndex;
}

