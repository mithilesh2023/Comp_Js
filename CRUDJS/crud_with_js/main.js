let input=document.getElementById('input')
let msg=document.getElementById('msg')
let posts=document.getElementById('posts')
let edit=document.getElementById('edit')
let del=document.getElementById('delete')
let form=document.getElementById('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('button clicked');
    formValidation();
})
let formValidation=()=>{
    if(input.value===''){
        msg.innerHTML="Post cannot be blank";
        console.log("failure");
    }else{
        console.log("success")
        msg.innerHTML='';
        acceptData();
    }
};
let data={}
let acceptData=()=>{
    data['text']=input.value;
    console.log(data);
    createPost();
}
let createPost=()=>{
    posts.innerHTML +=`
    <div id="posts">
        <span>${data.text}</span>
        <button id="edit" onClick="editPost(this)">Edit</button>
        <button id="delete" onClick="deletePost(this)">Delete</button>
    </div>
    `;
    input.value='';
}

let deletePost=(e)=>{
    e.parentElement.remove();
}
let editPost=(e)=>{
    input.value=e.previousElementSibling.innerHTML;
    e.parentElement.remove();
}