const products = [
    {
        id: 17,
        title: 'Minimal LCD chair',
        categorie: 'Chair',
        sum: 100,
        delSum: 250,
        imgUrl: './img/product1.jpg',
        type: 'new'
    },
    {
        id: 18,
        title: 'Modern Sofa',
        categorie: 'Chair',
        sum: 130,
        delSum: 250,
        imgUrl: './img/product4.jpg',
        type: 'best'
    },
    {
        id: 19,
        title: 'Microfiber Sofa',
        categorie: 'Chair',
        sum: 30,
        delSum: 50,
        imgUrl: './img/product3.jpg',
        type: 'best'
    },
    {
        id: 20,
        title: 'Minimal iconic chair',
        categorie: 'Bench',
        sum: 180,
        delSum: 300,
        imgUrl: './img/product8.jpg',
        type: 'new'
    },
    {
        id: 21,
        title: 'Minimal iconic chair',
        categorie: 'stogare',
        sum: 130,
        delSum: 280,
        imgUrl: './img/product5.jpg',
        type: 'today'
    },
    {
        id: 22,
        title: 'Minimal iconic chair',
        categorie: 'furniture',
        sum: 140,
        delSum: 210,
        imgUrl: './img/product6.jpg',
        type: 'new'
    },
    {
        id: 23,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 150,
        delSum: 180,
        imgUrl: './img/product7.jpg',
        type: 'today'
    },
    {
        id: 24,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 80,
        delSum: 190,
        imgUrl: './img/trending8.jpg',
        type: 'today'
    },
    {
        id: 25,
        title: 'Minimal LCD chair',
        categorie: 'Chair',
        sum: 100,
        delSum: 250,
        imgUrl: './img/trending1.jpg',
        type: 'new'
    },
    {
        id: 16,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 130,
        delSum: 250,
        imgUrl: './img/trending2.jpg',
        type: 'best'
    },
    {
        id: 27,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 30,
        delSum: 50,
        imgUrl: './img/trending3.jpg',
        type: 'best'
    },
    {
        id: 28,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 180,
        delSum: 300,
        imgUrl: './img/trending4.jpg',
        type: 'new'
    },
    {
        id: 29,
        title: 'Minimal iconic chair',
        categorie: 'table',
        sum: 100,
        delSum: 200,
        imgUrl: './img/trending5.jpg',
        type: 'today'
    },
    {
        id: 30,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 140,
        delSum: 210,
        imgUrl: './img/trending6.jpg',
        type: 'new'
    },
    {
        id: 31,
        title: 'Minimal iconic chair',
        categorie: 'sofa',
        sum: 150,
        delSum: 180,
        imgUrl: './img/trending7.jpg',
        type: 'today'
    },
    {
        id: 32,
        title: 'Minimal iconic chair',
        categorie: 'bench',
        sum: 80,
        delSum: 190,
        imgUrl: './img/trending8.jpg',
        type: 'today'
    },
    {
        id: 9,
        title: 'Minimal LCD chair',
        categorie: 'Chair',
        sum: 100,
        delSum: 250,
        imgUrl: './img/product1.jpg',
        type: 'new'
    },
    {
        id: 10,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 130,
        delSum: 250,
        imgUrl: './img/product2.jpg',
        type: 'best'
    },
    {
        id: 11,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 30,
        delSum: 50,
        imgUrl: './img/product3.jpg',
        type: 'best'
    },
    {
        id: 12,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 180,
        delSum: 300,
        imgUrl: './img/product4.jpg',
        type: 'new'
    },
    {
        id: 13,
        title: 'Minimal iconic chair',
        categorie: 'table',
        sum: 100,
        delSum: 200,
        imgUrl: './img/product5.jpg',
        type: 'today'
    },
    {
        id: 14,
        title: 'Microfiber Sofa',
        categorie: 'Chair',
        sum: 140,
        delSum: 210,
        imgUrl: './img/product6.jpg',
        type: 'new'
    },
    {
        id: 15,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 150,
        delSum: 180,
        imgUrl: './img/product7.jpg',
        type: 'today'
    },
    {
        id: 16,
        title: 'Microfiber Sofa',
        categorie: 'bench',
        sum: 80,
        delSum: 190,
        imgUrl: './img/trending8.jpg',
        type: 'today'
    },
    {
        id: 1,
        title: 'Minimal LCD chair',
        categorie: 'Chair',
        sum: 100,
        delSum: 250,
        imgUrl: './img/trending1.jpg',
        type: 'new'
    },
    {
        id: 2,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 130,
        delSum: 250,
        imgUrl: './img/trending2.jpg',
        type: 'best'
    },
    {
        id: 3,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 30,
        delSum: 50,
        imgUrl: './img/trending3.jpg',
        type: 'best'
    },
    {
        id: 4,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 180,
        delSum: 300,
        imgUrl: './img/trending4.jpg',
        type: 'new'
    },
    {
        id: 5,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 100,
        delSum: 200,
        imgUrl: './img/trending5.jpg',
        type: 'today'
    },
    {
        id: 6,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 140,
        delSum: 210,
        imgUrl: './img/trending6.jpg',
        type: 'new'
    },
    {
        id: 7,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 150,
        delSum: 180,
        imgUrl: './img/trending7.jpg',
        type: 'today'
    },
    {
        id: 8,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 80,
        delSum: 190,
        imgUrl: './img/trending8.jpg',
        type: 'today'
    },
    {
        id: 64,
        title: 'Minimal LCD chair',
        categorie: 'Chair',
        sum: 100,
        delSum: 250,
        imgUrl: './img/product1.jpg',
        type: 'new'
    },
    {
        id: 63,
        title: 'Modern Sofa',
        categorie: 'Chair',
        sum: 130,
        delSum: 250,
        imgUrl: './img/product4.jpg',
        type: 'best'
    },
    {
        id: 62,
        title: 'Microfiber Sofa',
        categorie: 'Chair',
        sum: 30,
        delSum: 50,
        imgUrl: './img/product3.jpg',
        type: 'best'
    },
    {
        id: 61,
        title: 'Minimal iconic chair',
        categorie: 'Bench',
        sum: 180,
        delSum: 300,
        imgUrl: './img/product8.jpg',
        type: 'new'
    },
    {
        id: 60,
        title: 'Minimal iconic chair',
        categorie: 'stogare',
        sum: 130,
        delSum: 280,
        imgUrl: './img/product5.jpg',
        type: 'today'
    },
    {
        id: 59,
        title: 'Minimal iconic chair',
        categorie: 'furniture',
        sum: 140,
        delSum: 210,
        imgUrl: './img/product6.jpg',
        type: 'new'
    },
    {
        id: 58,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 150,
        delSum: 180,
        imgUrl: './img/product7.jpg',
        type: 'today'
    },
    {
        id: 57,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 80,
        delSum: 190,
        imgUrl: './img/trending8.jpg',
        type: 'today'
    },
    {
        id: 56,
        title: 'Minimal LCD chair',
        categorie: 'Chair',
        sum: 100,
        delSum: 250,
        imgUrl: './img/trending1.jpg',
        type: 'new'
    },
    {
        id: 55,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 130,
        delSum: 250,
        imgUrl: './img/trending2.jpg',
        type: 'best'
    },
    {
        id: 54,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 30,
        delSum: 50,
        imgUrl: './img/trending3.jpg',
        type: 'best'
    },
    {
        id: 53,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 180,
        delSum: 300,
        imgUrl: './img/trending4.jpg',
        type: 'new'
    },
    {
        id: 52,
        title: 'Minimal iconic chair',
        categorie: 'table',
        sum: 100,
        delSum: 200,
        imgUrl: './img/trending5.jpg',
        type: 'today'
    },
    {
        id: 51,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 140,
        delSum: 210,
        imgUrl: './img/trending6.jpg',
        type: 'new'
    },
    {
        id: 50,
        title: 'Minimal iconic chair',
        categorie: 'sofa',
        sum: 150,
        delSum: 180,
        imgUrl: './img/trending7.jpg',
        type: 'today'
    },
    {
        id: 49,
        title: 'Minimal iconic chair',
        categorie: 'bench',
        sum: 80,
        delSum: 190,
        imgUrl: './img/trending8.jpg',
        type: 'today'
    },
    {
        id: 48,
        title: 'Minimal LCD chair',
        categorie: 'Chair',
        sum: 100,
        delSum: 250,
        imgUrl: './img/product1.jpg',
        type: 'new'
    },
    {
        id: 47,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 130,
        delSum: 250,
        imgUrl: './img/product2.jpg',
        type: 'best'
    },
    {
        id: 46,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 30,
        delSum: 50,
        imgUrl: './img/product3.jpg',
        type: 'best'
    },
    {
        id: 45,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 180,
        delSum: 300,
        imgUrl: './img/product4.jpg',
        type: 'new'
    },
    {
        id: 44,
        title: 'Minimal iconic chair',
        categorie: 'table',
        sum: 100,
        delSum: 200,
        imgUrl: './img/product5.jpg',
        type: 'today'
    },
    {
        id: 43,
        title: 'Microfiber Sofa',
        categorie: 'Chair',
        sum: 140,
        delSum: 210,
        imgUrl: './img/product6.jpg',
        type: 'new'
    },
    {
        id: 42,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 150,
        delSum: 180,
        imgUrl: './img/product7.jpg',
        type: 'today'
    },
    {
        id: 41,
        title: 'Microfiber Sofa',
        categorie: 'bench',
        sum: 80,
        delSum: 190,
        imgUrl: './img/trending8.jpg',
        type: 'today'
    },
    {
        id: 40,
        title: 'Minimal LCD chair',
        categorie: 'Chair',
        sum: 100,
        delSum: 250,
        imgUrl: './img/trending1.jpg',
        type: 'new'
    },
    {
        id: 39,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 130,
        delSum: 250,
        imgUrl: './img/trending2.jpg',
        type: 'best'
    },
    {
        id: 38,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 30,
        delSum: 50,
        imgUrl: './img/trending3.jpg',
        type: 'best'
    },
    {
        id: 37,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 180,
        delSum: 300,
        imgUrl: './img/trending4.jpg',
        type: 'new'
    },
    {
        id: 36,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 100,
        delSum: 200,
        imgUrl: './img/trending5.jpg',
        type: 'today'
    },
    {
        id: 35,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 140,
        delSum: 210,
        imgUrl: './img/trending6.jpg',
        type: 'new'
    },
    {
        id: 34,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 150,
        delSum: 180,
        imgUrl: './img/trending7.jpg',
        type: 'today'
    },
    {
        id: 33,
        title: 'Minimal iconic chair',
        categorie: 'Chair',
        sum: 80,
        delSum: 190,
        imgUrl: './img/trending8.jpg',
        type: 'today'
    },
    
]