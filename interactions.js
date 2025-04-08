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


 // Initialize modal
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
});

// Function to display selected pastry
function displayPastry() {
    const selectedPastry = document.querySelector('input[name="pastry"]:checked').value;
    document.getElementById('pastry-response').innerText = `You selected: ${selectedPastry}`;
}

// Function to handle email subscription form submission
function submitEmail(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    document.getElementById('email-response').innerText = `Thank you for subscribing! Updates will be sent to: ${email}`;
    document.getElementById('email').value = ''; // Clear the input


    // Display modal
    const modalText = document.getElementById('modal-content-text');
    modalText.innerText = `Thank you for subscribing! Updates will be sent to: ${email}`;
    const modal = M.Modal.getInstance(document.getElementById('modal1'));
    modal.open();
}