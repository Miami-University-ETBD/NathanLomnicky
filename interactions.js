let phoneNum;
let idea;

document.getElementById("mySubmit").onclick = function () {
    phoneNum = document.getElementById("numberInput").value;
    console.log(phoneNum);
}

document.getElementById("ideaSubmit").onclick = function () {
    idea = document.getElementById("ideaInput").value;
    console.log(idea);
}

// Initialize modal
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});