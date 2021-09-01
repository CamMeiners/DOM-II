//header stuff
const logoHeading = document.querySelector('.container');
const logo = logoHeading.querySelector('.logo-heading');
//nav stuff
const nav = document.querySelector('.nav');
const links = nav.querySelector ('.nav-link');
//bus image
const main = document.querySelector('.intro');
const buss = main.querySelector('img');
//first paragraph welcome to the fun bus
const firstTitle = document.querySelector('h2');
const firstP = document.querySelector('p');
//second paragraph lets go
const secondSection = document.querySelector('.content-section')
const secondTitle = secondSection.querySelector('h2');
const secondP = secondSection.querySelector('p');
//map image
const content1 = document.querySelector('.content-section')
const map = content1.querySelector('.img-content');
//water town image
const content2 = document.querySelector('.inverse-content');
const waterTown = content2.querySelector('.img-content');
//third paragraph adventure awaits

//fourth paragraph pick your destination
const destination = document.querySelector('.destination');
const destT = destination.querySelector('h2');
const destP = destination.querySelector('p');

//boat image
const destiny = document.querySelector('.content-destination');
const boat = destiny.querySelector('img');
//fun in the sun
//mountain excursion
//island getaway
//footer and copyright

logo.addEventListener('mouseover', function(event){
    logo.style.color=('yellow')
})
logo.addEventListener('mouseleave', function(event){
    logo.style.color=('black')
})
waterTown.addEventListener('click',function(event){
    waterTown.style.cssText += 'border:10px solid red;'
})
waterTown.addEventListener('dblclick',function(event){
    waterTown.style.cssText += 'border:none;'
})
document.addEventListener('keydown',function(event){
    if(event.key === 'q'){
        firstP.style.transform = 'scaleX(50)';
 }
})
document.addEventListener('keyup',function(event){
    if(event.key === 'q'){
            firstP.style.transform = 'scaleX(1)';
 }
})
document.addEventListener('wheel',function(event){
    nav.style.cssText += 'background: green;';
})
window.addEventListener('load', function(event){
    destiny.style.cssText += 'color:white;'
})
document.addEventListener('scroll', function(event){
    document.style.cssText += 'background:black;'
})
window.addEventListener('resize',function(event){
    content2.style.cssText += 'color:white;'
})