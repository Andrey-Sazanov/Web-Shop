let cart = document.getElementById('cart')
let info = document.getElementById('cartarr')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let display = document.getElementById('display')
let i = 0
let add = document.getElementById('add-to-cart')
let item = 'Fall Limited Edition Sneackers'
const price = 125;
plus.addEventListener('click',()=>{
    display.textContent = i+=1;
})
add.addEventListener('click',()=>{
    arr.push(item)
})
minus.addEventListener('click',()=>{
    display.textContent = i-=1  
})
let arr = ['']
cart.addEventListener('mouseover',()=>{
    for(let k = 0; k < arr.length;k++){
        if(i===0)
            info.innerHTML = 'cart is empry'
        else{
            info.innerHTML  = `${item} x ${i} Total:${price * i}`
        }
    }
})
