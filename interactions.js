let phoneNum;
let idea;

document.getElementById("mySubmit").onclick = function(){
    phoneNum = document.getElementById("numberInput").value;
    console.log(phoneNum);
}

document.getElementById("ideaSubmit").onclick = function(){
    idea = document.getElementById("ideaInput").value;
    console.log(idea);
}