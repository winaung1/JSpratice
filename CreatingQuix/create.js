let input = [...document.querySelectorAll('input')];
let button = [...document.querySelectorAll('button')];


let dataBase = []

// let login = true;
// if(login){
//     if(btn.matches('[data-login')){

//         btn.classList.add('hide'); 
//     }
// }
input.forEach(item => {
    button.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            if(item.value.length > 0){
                if(e.target.matches('[data-register]')){
                    dataBase.push(item.value)
                    console.log(dataBase)
                }
                if(e.target.matches('[data-login]')){
                    console.log('hjahhah')
                }
               item.value = ''
            }
            })
    })
    
})



