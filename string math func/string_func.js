let choice , textValue
document.querySelectorAll('.sub-item button' ).forEach(item=>{
    item.addEventListener('click',(e)=>{
        choice = e.target.childNodes[0].nodeValue;
        stringFunction()
    })
})
let textbox = document.querySelector('.input').firstElementChild.addEventListener('keyup',(e)=>{
    textValue = e.target.value
})
let outputbox = document.querySelector('.text-output')
function stringFunction(){
    if(textValue == undefined) return;
    // choose =  choice.replace(/[^a-zA-Z]/g, '')
    choose = choice;
    switch (choose) {
        case "length": {
            outputbox.textContent = textValue.length
        }
            break;
        case "slice(2,5)": outputbox.textContent = textValue.slice(2,5);
            break;
        case "replace one->uno": outputbox.textContent = textValue.replace("one"," uno ");
        break;
        case "uppercase": outputbox.textContent = textValue.toUpperCase();
        break;
        case "lowercase": outputbox.textContent = textValue.toLowerCase();
        break;
        case "concat one": outputbox.textContent = textValue.concat("one");
        break;
        default:
            break;
    }
}
