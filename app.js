

const colors = ["green", "yellow", "blue", "darkorange", "purple", "grey"];

const btn = document.querySelector('.color-btn');
const color = document.querySelector('.color');
const body = document.querySelector('body')



btn.addEventListener("click", function(){
   const randomNumber = getRandomNumber();
   
   body.style.backgroundColor = colors[randomNumber];
   
   color.textContent = colors[randomNumber]
})

function getRandomNumber(){
   return Math.floor(Math.random() * colors.length)
        
}
