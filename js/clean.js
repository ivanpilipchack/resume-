//variable for profile photo
let myAvatar = document.querySelector('img');
let myPhoto = 'img/portret.png';


setTimeout(function showPhoto() {
    myAvatar.src = myPhoto;
}, 4000)






//variable for footer
var email = document.getElementById("email");
var footer = document.getElementById("footer");

footer.onmouseenter = function(event) {
    event.preventDefault();
    email.innerHTML = "pilipchackiivan@gmail.com";
}
footer.onmouseleave = function(event) {
        email.innerHTML = "E-mail";
    }
    //variable linck
var linck = document.getElementById('work_linck');
//variable hint
var hint = document.getElementById('work_hint');
linck.onmouseenter = function() {
    hint.style.display = 'block';
}
linck.onmouseleave = function() {
        hint.style.display = 'none';
    }
    //section fiedBak
let commentBtn = document.getElementById('btn');
let showForm = document.getElementById('fiedBack');

function showComment() {
    if (showForm.style.display === 'none') {
        showForm.style.display = 'block';
        commentBtn.innerText = 'Close';
        commentBtn.style.color = 'red';
        commentBtn.style.fontWeight = '400';
    } else {
        showForm.style.display = 'none';
        commentBtn.innerText = 'Add Comment';
        commentBtn.style.color = '#fff';
    }
}
commentBtn.addEventListener('click', showComment);


//hint for form
let textarea = document.querySelector('textarea');
let form = document.querySelector('form');
let hintStoping = document.getElementById('labbel')
let timeout;

textarea.addEventListener('keydown', () => {
    timeout = setTimeout(function() {
        hintStoping.innerText = 'Your Stoping';
    }, 5000);
})
textarea.addEventListener('keypress', () => {
    hintStoping.innerText = 'Writting Comment';

})

function hintForm() {
    let newEl = document.createElement('p');
    newEl.id = 'formHint';
    newEl.innerHTML = 'please your fiedback!';
    form.appendChild(newEl);
    event.target.style.border = '1px solid black';
    event.target.style.boxShadow = '0 0 10px black';
}
textarea.addEventListener('focus', hintForm);


function blurForm() {
    let hideHint = document.getElementById('formHint');
    hideHint.style.display = 'none';
    textarea.style.border = 'none';
    textarea.style.boxShadow = '0 0 10px black';
    hintStoping.innerText = 'Your fiedback';
}
textarea.addEventListener('blur', blurForm);