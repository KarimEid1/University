
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true });
var Product = require('../models/product');


var products = [
    new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/e/e1/Spider-Man_PS4_cover.jpg',
    title: 'Spider Man',
    description: 'Marvel\'s Spider-Man is an action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment for the PlayStation 4.',
    price: 60
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Monster_Hunter_World_cover_art.jpg',
        title: 'Monster Hunter: World',
        description: 'Monster Hunter: World is an action role-playing game developed and published by Capcom. A part of the Monster Hunter series.',
        price: 60
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/8/87/Forza_Horizon_4_cover.jpg',
        title: 'Forza Horizon 4',
        description: 'Forza Horizon 4 is an open world racing video game developed by Playground Games and published by Microsoft Studios',
        price: 60
    }),
    new Product({
        imagePath: 'https://www.instant-gaming.com/images/products/1995/271x377/1995.jpg',
        title: 'PUBG',
        description: 'PlayerUnknown\'s Battlegrounds (PUBG) is an online multiplayer battle royale game developed and published by PUBG Corporation.',
        price: 30
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/0/03/Far_Cry_5_boxshot.jpg',
        title: 'Far Cry 5',
        description: 'Far Cry 5 is an action-adventure first-person shooter video game developed by Ubisoft Montreal and Ubisoft Toronto.',
        price: 60
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/4/48/Divinity_Original_Sin_2_cover_art.jpg',
        title: 'Divinity Original Sin 2',
        description: 'Divinity: Original Sin II is a role-playing video game developed and published by Larian Studios.The sequel to 2014\'s Divinity: Original Sin.',
        price: 45
    })
    
];

var count = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        count++;
        if (count == products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}