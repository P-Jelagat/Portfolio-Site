const links = document.querySelectorAll(".navLink");
const sections = document.querySelectorAll(".section");
const underline = document.querySelector(".underline");

let currentIndex = 0;

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

/*function switchSection(newIndex){
    const currentSection = sections[currentIndex];
    const nextSection = sections[newIndex];
    currentSection.classList.remove("activeSection");
    if(newIndex > currentIndex){
        nextSection.style.transform = "translateX(100%)";
    }else{
        nextSection.style.transform = "translateX(-100%)";
    }

    setTimeout(() => {
        nextSection.classList.add("activeSection");
    }, 10);

    currentIndex = newIndex;
}*/

function switchSection(newIndex){

    if(newIndex === currentIndex) return;

    const currentSection = sections[currentIndex];
    const nextSection = sections[newIndex];

    // Reset next section instantly
    nextSection.style.transition = "none";

    if(newIndex > currentIndex){
        nextSection.style.transform = "translateX(100%)";
    } else {
        nextSection.style.transform = "translateX(-100%)";
    }

    nextSection.style.opacity = "1";

    // Force browser repaint
    nextSection.offsetHeight;

    // Re-enable transition
    nextSection.style.transition = "0.5s ease";

    // Slide current out
    if(newIndex > currentIndex){
        currentSection.style.transform = "translateX(-100%)";
    } else {
        currentSection.style.transform = "translateX(100%)";
    }

    currentSection.style.opacity = "0";

    // Bring next in
    nextSection.style.transform = "translateX(0)";

    currentIndex = newIndex;
}