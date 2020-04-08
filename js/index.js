    // Your code goes here 
    // store html in variable
    const title = document.querySelector('h1')
    // when h1 is moused over text color will change to dodgerblue
    // add event
    title.addEventListener('mouseover', function(event){
        event.target.style.color = 'dodgerblue'
    })

    //When any nav item is selected press any key down and the background color will turn yellow
    const anyKey = document.querySelector('nav')
        anyKey.addEventListener('keydown', function(event){
        event.target.style.backgroundColor = 'yellow'
    })
    //when you hover over fun image size increases by .3 in 2s
    const magnify = document.querySelector(".img-fluid")
        magnify.addEventListener('mouseenter', function(event){
            event.target.style.transform = 'scale(1.3)'
            event.target.style.transition = 'transform 2s'
    })
    
    //when you hover away fun image size decreases back to normal
     magnify.addEventListener('mouseleave', function(event){
        event.target.style.transform = 'scale(1)'
    })

    //when you click on any h2 element the color turns red
    document.querySelectorAll('h2').forEach(function(event){
        event.addEventListener('click', function(event){
            event.target.style.color = 'red'
        })
    })
    // when you double click on any paragraph it shrinks to half its size
    document.querySelectorAll('p').forEach(function(event){
        event.addEventListener('dblclick', function(event){
            event.target.style.transform = 'scale(.5)'
        })
    })
    // when you resize page boat image changes to van
    const diffImg = document.querySelector('.img-fluid')
     window.addEventListener('resize', function(event) {
        diffImg.src='https://images.unsplash.com/photo-1554469449-99289c70a3a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    })