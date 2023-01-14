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
        case "round": 
            outputbox.textContent = Math.round(textValue);
            break;
        case "ceil": outputbox.textContent = Math.ceil(textValue);
            break;
        case "floor": outputbox.textContent = Math.floor(textValue);;
        break;
        case "sign": outputbox.textContent = Math.sign(textValue);
        break;
        case "square": outputbox.textContent = Math.pow(textValue,2);
        break;
        case "sqrt": outputbox.textContent = Math.sqrt(textValue);
        break;
        default:
            break;
    }
}
