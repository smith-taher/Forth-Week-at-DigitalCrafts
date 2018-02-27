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

    var $thumbs = $('.thumbnails');
    var $lbImg = $('.ligthbox-img');
    var $lb = $('.lighbox');
    $thumbs.on('click', 'a', function (e) {
        e.preventDefault();
        var big = $(this).attr('href');
        $lbImg.attr('src', big);
        $lb.attr('data-state', 'visible');

    })
