// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heartsNodeArray = [...document.getElementsByClassName('like-glyph')];
const modal = document.getElementById('modal')
const modalParagraph = document.getElementById('modal-message');

let callServerAndCatch = (event) => {
  mimicServerCall()
  .then(() => handleResponse(event))
  .catch(error => handleError(error))
}

let handleError = (errorMessage) => {
  modal.classList.remove('hidden');
  modalParagraph.innerText = errorMessage;
  setTimeout(() => { 
    modal.classList.add('hidden')
    modalParagraph.innerText = ""; 
}, 3000)
  
}

heartsNodeArray.map(heartNode => {
  heartNode.addEventListener('click', callServerAndCatch)
});

let handleResponse = (event) => {

  if (event.target.textContent === EMPTY_HEART) {
    event.target.classList.add('activated-heart');
    event.target.textContent = FULL_HEART;
    
  } else {
    event.target.classList.remove('activated-heart')
    event.target.textContent = EMPTY_HEART;
  }
 
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
