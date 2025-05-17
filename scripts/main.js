// image switch
const image = document.querySelector('img');

image.onclick = function() {
    let src = image.getAttribute('src');
    if (src.includes('vahagn.jpg')) {
        image.setAttribute('src', 'images/vahagn2.jpg');
    } else {
        image.setAttribute('src', 'images/vahagn.jpg');
    }
}

// set user name and store in local storage
const button = document.querySelector('button');
const heading = document.querySelector('h1');

function setUserName() {
    let userName = prompt('Enter your name: ');
    if (!userName) {
        userName = 'Guest';
    }
    localStorage.setItem('userName', userName);
    heading.textContent = `Vahagn Welcomes You, ${userName}`;
}
if (!localStorage.getItem('userName')) {
    setUserName();
} else {
    heading.textContent = `Vahagn Welcomes You, ${localStorage.getItem('userName')}`;
}

button.onclick = function() {
    setUserName();
}

