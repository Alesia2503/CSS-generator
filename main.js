function generateGrad() {
    let topLeft = document.getElementById('top-left').value
    let topRight = document.getElementById('top-right').value
    let bottomLeft = document.getElementById('bottom-left').value
    let bottomRight = document.getElementById('bottom-right').value
    let result = document.getElementById('result')
    let textarea = document.getElementById('cssCode')

    textarea.value = `border-top-left-radius: ${topLeft}px;                   border-top-right-radius: ${topRight}px;                   border-bottom-left-radius: ${bottomLeft}px;         border-bottom-right-radius: ${bottomRight}px;`
        
    result.style.borderTopLeftRadius = topLeft + 'px'
    result.style.borderTopRightRadius = topRight + 'px'
    result.style.borderBottomLeftRadius = bottomLeft + 'px'
    result.style.borderBottomRightRadius = bottomRight + 'px'    
}
for(let item of document.querySelectorAll('input')) {
    item.addEventListener('input', generateGrad)
}
generateGrad()

function generateText() {
    let offsetX = document.getElementById('offsetX').value
    let offsetY = document.getElementById('offsetY').value
    let blur = document.getElementById('blur').value
    let color = document.getElementById('color').value
    let opacity = document.getElementById('opacity').value

    let red = parseInt(color.slice(1,3), 16)
    let green = parseInt(color.slice(3,5), 16)
    let blue = parseInt(color.slice(5,7), 16)

    let result1 = document.getElementById('result1')
    let textarea = document.getElementById('cssCodetwo')

    let str1 = `${offsetX}px ${offsetY}px ${blur}px rgba(${red}, ${green}, ${blue}, ${opacity})`
    textarea.value = `text-shadow: ${offsetX}px ${offsetY}px ${blur}px ${color}; /* Цвет в HEX*/                            text-shadow: ${offsetX}px ${offsetY}px ${blur}px rgba(${red}, ${green}, ${blue}, ${opacity}); /* Цвет в RGBA*/`
    result1.style.textShadow = str1  
}
for(let item of document.querySelectorAll('input')) {
    item.addEventListener('input', generateText)
}
generateText()

function generateGradient() {
    let direction = document.getElementById('direction').value
    let color1 = document.getElementById('color1').value
    let offsetGradient1 = document.getElementById('offset_gradient1').value
    let color2 = document.getElementById('color2').value
    let offsetGradient2 = document.getElementById('offset_gradient2').value
    
    let result2 = document.querySelector('.result_gradient')
    let textarea = document.getElementById('cssCodethree')

    let str2 = `linear-gradient(${direction}deg, ${color1} ${offsetGradient1}%, ${color2} ${offsetGradient2}%)`
    textarea.value = `background: ${color1}                                                        background: linear-gradient(${direction}deg, ${color1} ${offsetGradient1}%, ${color2} ${offsetGradient2}%)`
    result2.style.background =  str2
}
for(let item of document.querySelectorAll('input')) {
    item.addEventListener('input', generateGradient)
}
generateGradient()