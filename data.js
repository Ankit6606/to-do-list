//This is a method of storing the functions or js activities in a different file and exported to the app.js file by use of module exports of node.js

module.exports.getDate= function (){ 
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();
    let day = today.toLocaleDateString("en-US", options);
    return day;
}

module.exports.getDay=function getDay(){

    let options = { weekday: 'long' };
    let today  = new Date();
    let day = today.toLocaleDateString("en-US", options);
    return day;
}
