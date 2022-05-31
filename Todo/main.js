const display = document.getElementById('display');
const button = document.querySelector('#button');
const input = document.querySelector('#input');


function createElements(){
    let btn = document.createElement('button')
    let div = document.createElement('div');
    let btnTxt = document.createTextNode('delet')
    let text = document.createTextNode(input.value)
    let li = document.createElement('li');
    if(input.value.length > 0){
        li.appendChild(text);
        btn.appendChild(btnTxt)
        li.addEventListener('click', () => {
            li.classList.add('linethrough')
        })
        div.classList.add('styless')
        div.appendChild(li)
        div.appendChild(btn)
        display.appendChild(div)
    }
    btn.addEventListener('click', () => {
        div.remove()
    })
    clearInput()
}


button.addEventListener('click', () => {
    createElements()

})

input.addEventListener('keydown', (e) => {
    if(e.keyCode == '13'){
        createElements()
    }
})


function clearInput(){
    input.value = ''
}




// we gotta add div in around li and button in CSS we create a class to display flex and set color and then append it 