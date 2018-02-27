var $images = [
{
    url: "Images/boat.jpg",
    caption: "Sail Boat",
    info: "Sail boat on the water - what a beautiful day!"
},
{
    url: "Images/cliff.jpg",
    caption: "Cliff",
    info: "Cliff overlooking ocean at night!"
},
{
    url: "Images/dog.jpg",
    caption: "Puppy Dog",
    info: "Puppy dog eyes - awe how can you say no?"
},
{
    url: "Images/trees.jpg",
    caption: "Trees",
    info: "Forest of tree tops - serene!"
},
{
    url: "Images/water.jpg",
    caption: "Water",
    info: "Ripple on a pond!"
},
{
    url: "Images/bark.jpg",
    caption: "Tree Bark",
    info: "Love the texture of the bark!"
},
{
    url: "Images/boardwalk.jpg",
    caption: "Boardwalk",
    info: "Boardwalk leading out to the water"
},
{
    url: "Images/city.jpg",
    caption: "City",
    info: "View of the cityscape at night!"
},
];

var $screen = $('.screen');
var $caption = $('.caption');
var $info = $('.info');
var $thumbnails = $('.thumbnails');

// function initGallery() {
   
//     loadImage(0); 

//     for(var i = 0; i < $images.length; i++) {
//         var image = $images[i];
//         var img = document.createElement('img');
//         img.src = $images[i].url;
//         img.setAttribute('width', '170');
//         img.setAttribute("data-index", i);
//         img.addEventListener('click', changeImage);
//         thumbnails.appendChild(img);
//     }
// };

$thumbnails.on('click', 'a', function (e) {
    e.preventDefault();
    var target = $(this).this.attr('url');
    $images.attr('url', big);
    $screen.attr('data-index');
});

// function loadImage(index) {
//     var image = images[index];
//     screen.src = image.url;
//     caption.textContent = image.caption;
//     info.textContent = image.info;

// };

// initGallery();