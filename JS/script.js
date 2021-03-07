const btn = document.querySelector('.btn');

const red = document.querySelector('.item-1');
const yellow = document.querySelector('.item-2');
const green = document.querySelector('.item-3');

// btn.onclick = function(){
//     if (red.style.backgroundColor = 'red') {
//         red.style.backgroundColor = 'white';
//         yellow.style.backgroundColor = "yellow";
//         green.style.backgroundColor = "white";
//     } else if (yellow.style.backgroundColor = "yellow") {
//         red.style.backgroundColor = 'white';
//         yellow.style.backgroundColor = "white";
//         green.style.backgroundColor = "green";
//     } else if (green.style.backgroundColor = "green") {
//         red.style.backgroundColor = "red";
//         green.style.backgroundColor = "white";
//         yellow.style.backgroundColor = "white";
//      };
//  };


btn.onclick = function(){
    if (red.classList.contains ('item-1')) {
         red.classList.remove ('item-1');
 
         yellow.style.backgroundColor = "yellow";    
    } else if (yellow.style.backgroundColor = "yellow") {
         yellow.style.backgroundColor = "white";
 
         green.style.backgroundColor = "green";
    } else if (green.style.backgroundColor = "green") {
        green.style.backgroundColor = "white";
 
        red.style.backgroundColor = "red";
     };
 };


// btn.onclick = function(){
//     if (red.style.backgroundColor = 'red') {
//         red.style.backgroundColor = 'white';
//         yellow.style.backgroundColor = 'yellow';
//         console.log(red.style.backgroundColor);
//         console.log(yellow.style.backgroundColor);
//     } else if (yellow.style.backgroundColor = 'yellow') {
//         yellow.style.backgroundColor = 'white';
//         green.style.backgroundColor = '#008000';
//     } else if (green.style.backgroundColor = '#008000') {
//         green.style.backgroundColor = 'white';
//         red.style.backgroundColor = '#ff0000';
//     }
//  };
