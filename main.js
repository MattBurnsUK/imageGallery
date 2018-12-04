var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i=1; i<6; i++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', '/image-gallery/images/pic'+[i]+'.jpg');
    thumbBar.appendChild(newImage);
}
    
    function changeImage(e) {
            var newURL = e.target.getAttribute("src")
            displayedImage.setAttribute('src', newURL);
        }
    
thumbBar.addEventListener('click', changeImage);

/* Wiring up the Darken/Lighten button */

