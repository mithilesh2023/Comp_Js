let btn=document.getElementById('btn');
let para=document.querySelector('p');
let input=document.getElementById('input');
let edit=document.getElementById('edit');
let ul=document.getElementById('ul');

btn.addEventListener('click',function(e){
   
let btn=e.currentTarget;
let  input=btn.previousElementSibling;
 let currentDisplay=input.value;
 
 let result=document.getElementById('ul')
//  if(result.children[0].className=="newEmptyMsg"){
//     result.children[0].remove()
// }

let newpara=document.createElement('li');
//    newpara.textContent=input.value;
   newpara.innerHTML=` ${currentDisplay} 
                 <button id="del" onclick="deleteli(this)">del</button> 
                 <button id="edit">edit</button>
                 `

   result.appendChild(newpara)
})
function deleteli(e){
// console.log( e.parentElement)
e.parentElement.remove()
let result=document.getElementById('ul')
if(result.children.length==0){
    let newEmptyMsg=document.createElement('h3');
    newEmptyMsg.classList.add('emptyMsg');
            newEmptyMsg.textContent="Nothing is here , pelase add some item!"
            result.appendChild(newEmptyMsg)
}
}
