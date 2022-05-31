let notActive = document.querySelector('.not-active');
let a = document.querySelector('.a');
let b = document.querySelector('.b');
let c = document.querySelector('.c');
let button = document.querySelector('button');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');
let active = document.querySelector('.active');
let firstLine = document.querySelector('.firstLine');
let secondLine = document.querySelector('.secondLine');
let display1 = document.querySelector('.display1')
let display2 = document.querySelector('.display2')
let display3 = document.querySelector('.display3')

button.addEventListener('click', (e) =>{
    e.preventDefault()
        a.classList.remove('not-active')
        a.classList.add('active')
        firstLine.classList.remove('not-active')
        firstLine.classList.add('active')
        display1.classList.add('hidden')
        display2.classList.remove('hidden')
      
})

button2.addEventListener('click', (e) =>{
    e.preventDefault()
        b.classList.remove('not-active')
        b.classList.add('active')
        secondLine.classList.remove('not-active')
        secondLine.classList.add('active')
        display1.classList.add('hidden')
        display2.classList.add('hidden')
        display3.classList.remove('hidden')
   
})
button3.addEventListener('click', (e) =>{
    e.preventDefault()
        c.classList.remove('not-active')
        c.classList.add('active')
        secondLine.classList.remove('not-active')
        secondLine.classList.add('active')
        display1.classList.add('hidden')
        display2.classList.add('hidden')
        display3.classList.remove('hidden')
        
})