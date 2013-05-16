var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var step =require('step');

var writefile =require('./writefile');


step(

	function readUrl(){

		console.log("readUrl")

		request('http://m.media.daum.net/media/hotview/', this);

	},
	function parseImg(err, data){

		console.log("parseImg")
		
		var $ = cheerio.load(data.body);
		
		var result = [];

	 	$('.list_num a').each(function(index, el){
	 
	 		result.push( $(el).text() )
	        // console.log(  );
	    });

		return result;
	},
	function makeFile(err, data){

		console.log("makeFile")
		console.log(data)

		data = data.join("\n");

	    writefile.save('news-title.txt', data, this);
	},
	function done(err, data){

		console.log('It\'s saved!');
	}

);

