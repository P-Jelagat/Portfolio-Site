//adding character count functionality
const count = document.querySelector("#count");
const textarea = document.querySelector("#textarea");

textarea.addEventListener('input', () =>{
    count.textContent = '';
    count.textContent = `${textarea.value.length}`;
    if(textarea.value.length >= 450){
        count.style.color = 'red';
    }else{
        count.style.color = '';
    }
})


