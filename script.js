document.addEventListener('DOMContentLoaded',()=>{
document.querySelector('form').onsubmit=()=>{
    let sanu=document.querySelector('#username').value;
    let nish=document.querySelector('#password').value ;
    console.log("username=",sanu ,"password=",nish);
    document.querySelector('#username').value='';
    document.querySelector('#password').value ='';
    return false;
}


});