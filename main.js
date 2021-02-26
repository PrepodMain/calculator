/*let q = prompt();
console.log(q.length)
let i = 0;
let summ = 0;

while(q[i]<=q.length){
    console.log(q[i])
    let w =Number(q[i]);
    summ +=w;
    i++;
}
console.log(summ)*/
/*
let a = prompt();
let b = prompt();


while(a<b){
    if(b%a==0){
        console.log(b)
        break;
    }
    b++;
}*/
/*
let summ = 0;
let summ2 = 0;
console.log("Всі парні числа")
for (let i = 1; i <= 10; i++) {
    
    if (i % 2 == 0) {
        console.log(i);
        summ +=i;
    }else{
        summ2 +=i;
    }
}
console.log("Сума всіх парних чисел = ",summ)
console.log("Середнє значення всіх парних чисел = ",summ/2)

console.log("Сума всіх парних чисел = ",summ2)
console.log("Середнє значення всіх не парних чисел = ",summ2/2)*/
/*
let a = prompt();
let b = prompt();

while(a<b){
    if(b%a==0){
        console.log(b)
       break;
    }
    b++;
}
*/
/*
let word = ["У ", "В "]; 
let word2 = ["Понеділок ", "Вівторок ", "Середа ", "Четвер ", "П'ятниця ", "Субота"]; 
let word3 = ["чудовий ", "поганий ", "хороший ", "прекрасний ", "жахливий "]; 
let word4 = ["настій ", "день ", "фільм ", "трек ", "чай "]; 
 
let word1 = function() { 
    return word[Math.floor(Math.random() * word.length)]; 
} 
let word2 = function() { 
    return word[Math.floor(Math.random() * word2.length)]; 
} 
let word3 = function() { 
    return word[Math.floor(Math.random() * word3.length)]; 
} 
let word4 = function() { 
    return word[Math.floor(Math.random() * word4.length)]; 
} 
 
 
 
let RandomWord = function() { 
    console.log(word1() + word2() + word3() + word4()); 
} 
RandomWord(); 
 
 
 
 
console.log(Math.floor(Math.random() * 10));*/
/*
button = document.querySelector('#button');
numberU = document.querySelector('#text');
p1 = document.querySelector('#p1');

let arr = [1,2,3,4,5,6,7,8,9,11,12,131,4];

let score = 0;

button.onclick = function(){
    score +=1;
    console.log(score)
  button.value +=1 ; 
}





function hello(){
    alert("Hello, Welcome to JavaScript events")
}

function con(){
    console.log("Hello, Welcome to JavaScript events")
}*/
/*
let button = document.getElementById("button");
let button2 = document.getElementById("button2");
let input = document.getElementById("input");
let qaz = document.getElementById("toDoContainer");

button.addEventListener("click",addText);
button2.addEventListener("click",addText2);

function addText(){
    let paragraf = document.createElement('p');
    paragraf.innerHTML = input.value;
    qaz.appendChild(paragraf);
}
*/
let header = document.getElementById('input');
let but = document.getElementById('but');
let data = document.getElementById('data');
let sound2 = document.getElementById('sound');


function input(i){
    header.value = header.value + i;
}

function result(){
    header.value = eval(header.value);
}

function reset(){
    header.value = '';
}
