let buttons = document.querySelectorAll('button')
let display = document.getElementById('display')
let result
buttons.forEach(button => 
    button.addEventListener('click', (e) =>{
        switch(e.target.innerText){
            case 'AC':
                display.innerHTML = ''
                break;
            case '=': 
                if(display.innerText.length > 0){
                    display.innerText = eval(display.innerText)
                }
                break;
            default:
            display.innerText += e.target.innerText
        }

        
    })

    )



