var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';

myHeading.onclick = function() {
  // alert('You clicked me')
  document.querySelector('img').setAttribute('src', 'images/mtc-icon.png')
}