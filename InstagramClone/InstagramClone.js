// var NAV_SEL = "[data-nav-item]";
// var IMG_SEL = "[data-target]";

// var navItems = document.querySelectorAll(NAV_SEL);
// var imgTarget = document.querySelector(IMG_SEL);

// navItems.forEach(function (nav) {
//   nav.addEventListener('click', function (event) {
//     event.preventDefault();
//     imgTarget.setAttribute('src', nav.getAttribute('href'));
//   })
// });
// 
var myImage = document.querySelector(".images");
var imageArray = ["Images/boat.jpg", "Images/cliff.jpg", "Images/dog.jpg", "Images/trees.jpg", "Images/water.jpg", "Images/bark.jpg", "Images/boardwalk.jpg", "Images/city.jpg"];

var mainImage = document.querySelector(".mainImage");
var img = document.createElement('img');
mainImage.appendChild(img);
var target = img.src = imageArray[0];
img.setAttribute('data','')
var imgTarget = document.querySelector('[data]')

var changeImage = function (imageArray) {
    for ( var i = 0; i < imageArray.length; i++) {
        let img = document.createElement('img');
        myImage.appendChild(img);
        img.setAttribute("src", imageArray[i]);
        img.addEventListener("click", function(event){
            // console.log(event);
        imgTarget.setAttribute("src", event.target.src);
        })
    }
};
changeImage(imageArray);






