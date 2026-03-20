// pyramid of dom is a situation where you have deeply nested callbacks or conditions

    
// pyramid of dom is a situation where you have deeply nested callbacks or conditions

getData(function(a) {
    getMoreData(a, function(b) {
        getEvenMoreData(b, function(c) {
            getEvenMoreData(c, function(d) {
                // Ye jo '>' shape ban raha hai, isi ko Pyramid of Doom kehte hain
                console.log(d);
            });
        });
    });
});


