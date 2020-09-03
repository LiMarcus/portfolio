oDiv = document.getElementById('cloud');
aA = oDiv.getElementsByClassName('catergroy_name');
bB = oDiv.getElementsByClassName('taxonomy__count');

list = [];
for (i = 0; i < aA.length; i++) {
    list.push([aA[i].innerHTML,
    parseInt(bB[i].innerHTML, 10) + 1 
    ]);
}

var options = eval({
    "list": list,
    "gridSize": 16, // size of the grid in pixels,the larger the grid size, the bigger the gap between words.
    "weightFactor": 10, // number to multiply for size of each word in the list
    "fontWeight": 'normal', // 'normal', 'bold' or a callback
    "fontFamily": 'Times, serif', // font to use
    "color": 'random-light', // 'random-dark' or 'random-light'
    "backgroundColor": '#333', // the color of canvas
    "rotateRatio": 1, // probability for the word to rotate. 1 means always rotate
    //"drawMask": true, // visualize the grid by draw squares to mask the drawn areas.
    // maskColor : 'rgba(0, 0, 255, 0.8)';
    //"minSize": 10, // not work when set number over than 'freq'
    "shape": 'pentagon',//Available presents are circle (default), cardioid (apple or heart shape curve, the most known polar equation), diamond, square, triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.
    "ellipticity": 1.5,
    "hover": '',
});


WordCloud(document.getElementById('word_cloud'), options);


