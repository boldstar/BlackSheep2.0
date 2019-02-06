// show file string if file is selected
document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.value;
};

// Form message alert if showAlert function is called
function showAlert(msg) {
  const div = document.createElement('div');
  div.className = `alert alert-danger w-75`;
  div.appendChild(document.createTextNode(msg));
  const contact = document.querySelector('.contact')
  const form = document.querySelector('#contactForm')
  contact.insertBefore(div, form);
  setTimeout(() => document.querySelector('.alert').remove(), 5000);
}


// Form submit listener
document.querySelector('#contactForm').addEventListener('submit', (e) => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  if(name === '') {
    e.preventDefault();
    nameInput.className = `form-control my-3 border-danger`;
    showAlert('Please Fill In Required Fields');

    return;
  }
  else if(email === '') {
    e.preventDefault();
    emailInput.className = `form-control my-3 border-danger`;
    showAlert('Please Fill In Required Fields');

    return;
  }
  else {
    e.preventDefault();


    window.location.replace('http://localhost:5500/success.html')
  }
});

// if name input changes remove red border
document.getElementById('name').addEventListener('input', (e) => {
  const nameInput = document.getElementById('name');
  // apply the following class
  nameInput.className = `form-control my-3`;
})

// if email input changes remove red border
document.getElementById('email').addEventListener('input', (e) => {
  const emailInput = document.getElementById('email');
  // apply the following class
  emailInput.className = `form-control my-3`;
})
