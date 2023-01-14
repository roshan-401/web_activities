document.querySelectorAll('input')
.forEach( e =>{
    e.addEventListener('focus', (e)=>{
        vaildate(e.target)
})})
let output = document.querySelector('.output-container')

function vaildate(elem) {
    if(elem.name == "name") checkName(elem)
    if(elem.name == "username") checkUsername(elem)
    if(elem.name == "email") checkEmail(elem)
    if(elem.name == "password") checkPassword(elem) 
    if(elem.name == "confirm-password") checkConfirmPassword(elem)
}

function clearAll(){
    output.querySelectorAll('span').forEach(e=>{
        output.removeChild(e)
    })
}
function checkName(elem){
    clearAll()
    createConditions(["No numbers and special charcters allowed"])
    elem.addEventListener('keyup',()=>{
        //validating there is only letters
        if(elem.value.match(/^[A-Za-z]+$/)){
            output.querySelector('span').className = "success"
        }
        else{
            output.querySelector('span').className = "danger"
        }
    })
}
function checkUsername(elem){
    clearAll();
    createConditions([
        "Must start with a alphabet",
        "must only contain alphanumeric and underscore characters"
    ])
    elem.addEventListener('keyup',()=>{
        //validating the first charcter is a letter
        if(elem.value[0] && elem.value[0].match("^[A-Za-z_]+$")){
            output.querySelector('span#a0').className = "success"
        }
        else{
            output.querySelector('span#a0').className = "danger"
        }

        if(elem.value && elem.value.match("^[a-zA-Z0-9_]*$")){
            output.querySelector('span#a1').className = "success"
        }
        else{
            output.querySelector('span#a1').classList = "danger"
        }
    })
}
function checkEmail(elem){
    clearAll();
    createConditions(['enter a valid email address'])
    elem.addEventListener('keyup',()=>{
        let emailRegex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(elem.value.match(emailRegex))
        output.querySelector('span').className = "success"
    else
        output.querySelector('span').className = "danger"
    })
}
function checkPassword(elem){
    clearAll()
    let conditions = [
        "Should have minimum 8 charcters",
        "must conain atleast one character",
        "must contain atleast one number",
        "must contain atleast one uppercase letter",
        "must contain atleast one speacial character"
    ]
    createConditions(conditions)
    elem.addEventListener('keyup',()=>{
        (elem.value.length>8)? 
            output.querySelector('span#a0').className = "success" : output.querySelector('span#a0').className = "danger";

        (elem.value.match("[a-zA-Z]"))? 
            output.querySelector('span#a1').className = "success" : output.querySelector('span#a1').className = "danger";

        (elem.value.match("[0-9]"))? 
            output.querySelector('span#a2').className = "success" : output.querySelector('span#a2').className = "danger";

        (elem.value.match("[A-Z]"))? 
            output.querySelector('span#a3').className = "success" : output.querySelector('span#a3').className = "danger";

        (elem.value.match("[$!@#$%^&*()_+=`~:<>?{}]"))? 
            output.querySelector('span#a4').className = "success" : output.querySelector('span#a4').className = "danger";
    })
}
function checkConfirmPassword(elem){
    clearAll();
    createConditions(["password should match"])
    elem.addEventListener('keyup',(e)=>{
        if(document.querySelector('[name="password"]').value == elem.value)
            output.querySelector('span').className = "success"
        else 
            output.querySelector('span').className = "danger"
    })
}
function createConditions(conditions){
    conditions.forEach((condition,i)=>{
        let span = document.createElement('span')
        span.id = "a"+i
        span.textContent = condition
        output.appendChild(span)
    })
}