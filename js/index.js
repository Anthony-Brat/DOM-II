// Your code goes here 
// store html in variable
const title = document.querySelector('h1')
// when h1 is moused over text color will change to red
// add event
title.addEventListener('mouseover', function(event){
    event.target.style.color = 'red'
})

