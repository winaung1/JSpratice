let total = document.getElementById('total');
let display = document.getElementById('display');
let input = document.getElementById('input');
let income = document.getElementById('income');
let expense = document.getElementById('expense');





let data = []
income.addEventListener('click', () => {
    if(input.value.length > 0){
        let sum = 0
        let sub = 0
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let p = document.createElement('p')
        let text = document.createTextNode(parseInt(input.value))
        let text2 = document.createTextNode('$');
        let p2 = document.createElement('p')
        let text3 = document.createTextNode('income')
        p.appendChild(text);
        li.appendChild(p)
        li.classList.add('list')
        ul.classList.add('flex')
        p2.appendChild(text3)
        li.appendChild(p2)
        ul.appendChild(text2)
        ul.appendChild(li);
        display.appendChild(ul)
        
    
        data.push(parseInt(input.value))
        for (let i = 0; i < data.length; i++){
            sum += data[i]
        }
       
         total.innerHTML = `$${sum}`
    
    }
        
    clearInput()
}
)


expense.addEventListener('click', () => {
    if(input.value.length > 0){
        let sum = 0
        let sub = 0
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let p = document.createElement('p')
        let text = document.createTextNode(-Math.abs(input.value))
        let text2 = document.createTextNode('$');
        let p2 = document.createElement('p')
        let text3 = document.createTextNode('expense')
        p.appendChild(text);
        li.appendChild(p)
        li.classList.add('list')
        ul.classList.add('flex')
        p2.appendChild(text3)
        li.appendChild(p2)
        ul.appendChild(text2)
        ul.appendChild(li);
        display.appendChild(ul)
        
    
        data.push(-Math.abs(input.value))
        for (let i = 0; i < data.length; i++){
            sum += data[i]
        }
       
        total.innerHTML = `$${sum}`
    }
   
    clearInput()
}
)

function clearInput(){
    input.value =""
}

console.log(data)

