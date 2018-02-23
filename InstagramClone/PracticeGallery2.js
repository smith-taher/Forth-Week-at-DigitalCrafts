var images = [
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

var screen = document.getElementById('screen');
var caption = document.getElementById('caption');
var info = document.getElementById('info');
var thumbnails = document.getElementById('thumbnails');

function initGallery() {
    screen.src = images[0].url;
    caption.textContent = images[0].caption;
    info.textContent = images[0].info;

    for(var i = 0; i < images.length; i++) {
        var image = images[i];
        var img = document.createElement('img');
        img.src = images[i].url;
        img.setAttribute('width', '170');
        thumbnails.appendChild(img);
    }

};

initGallery();