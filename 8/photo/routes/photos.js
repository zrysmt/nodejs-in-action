var path = require('path');
var fs = require('fs');
var join = path.join;
var photos = require('../mock/photos.js');

console.log(photos);

exports.list = function(req,res){
	res.render('photos',{
		title:"照片",
		photos:photos
	});
};