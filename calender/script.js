
let main = document.querySelector('main')
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Auguest",
    "September",
    "October",
    "November",
    "December",
];

//   year.addEventListener('change', renderCalender(year.value))

function renderCalender(y) {
      let year = document.querySelector('input').value
    document.querySelectorAll('div').forEach(div=>{
        main.removeChild(div)
    })
    console.log(y);
    months.forEach((x,j)=>{
        let monthElem = document.createElement('div')
        monthElem.className = "month"
        monthElem.id = x

        let monthHead = document.createElement('span')
        monthHead.textContent = x
        monthHead.className = "monthHead"

        monthElem.appendChild(monthHead)
        main.appendChild(monthElem)
    
        let month = document.getElementById(x)
        // console.log(month);
        let dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
        dayNames.forEach(day=>{
        let elem = document.createElement('li')
        elem.textContent = day
        month.appendChild(elem)
    })
    let d = new Date(year,j)
    let lastday = new Date(year,j+1,0)
    for(let i=d.getDay();i>0;i--){
        let elem = document.createElement('li')
        elem.textContent = "-"
        month.appendChild(elem)
    }
    for(let i=1;i<=lastday.getDate();i++){
        let elem = document.createElement('li')
        elem.textContent = i
        month.appendChild(elem)
    }
    for(let i=lastday.getDay();i<6;i++){
        let elem = document.createElement('li')
        elem.textContent = "-"
        month.appendChild(elem)
    }
      })

  }

let d = new Date()
document.querySelector('input').value = d.getFullYear()
renderCalender(d.getFullYear())
