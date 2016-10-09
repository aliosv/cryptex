({
    block : 'page',
    title : 'Cryptex - Trade digital currency exchange',
    head : [
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=375, user-scalable=no' } },
        { elem : 'link', attrs : { href : 'https://fonts.googleapis.com/css?family=Open+Sans', rel : 'stylesheet' } },
        { elem : 'css', url : '_index.css' },
        { elem : 'favicon' }
    ],
    scripts : [{ elem : 'js', url : '_index.js' }],
    mods : { theme : 'islands' },
    content : ['intro', 'rates', 'security', 'payment', 'footer'].map(function(value) {
        return { block : 'section', mods : { theme : value } };
    })
});
