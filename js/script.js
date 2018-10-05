
for (var i=0; i < movies.length; i++) {
	document.getElementById('movies').innerHTML += '<div class= "movie col-md-5 col-sm-11 '
	+movies[i].genre+'"><div class="row"><img class="col-4" src="' 
	+ movies[i].image + '"><div class="sideContent col-7"><p class= "name">' + movies[i].name +
	 '</p><p class="description">' + movies[i].description +
	 '</p> <button onclick="like('+i+')" class="btn"> Like &#x1F44D </button> <button id="result'+i+'" class="number">0</button> </div></div></div>';
}

function like(i) {
	var count = $("#result" + i).html();
		count++;
	$("#result" + i).html(count);
}

$('#genreOne').click(function() {
	var a = $('.thriller');
	var b = $('.comedy');
	var c = $('.drama');
	var d = $('.action');
		a.show(1000);
		b.hide(1000);
		c.hide(1000);
		d.hide(1000);
})

$('#genreTwo').click(function() {
	var a = $('.thriller');
	var b = $('.comedy');
	var c = $('.drama');
	var d = $('.action');
		a.hide(1000);
		b.show(1000);
		c.hide(1000);
		d.hide(1000);
})

$('#genreThree').click(function() {
	var a = $('.thriller');
	var b = $('.comedy');
	var c = $('.drama');
	var d = $('.action');
		a.hide(1000);
		b.hide(1000);
		c.show(1000);
		d.hide(1000);
})

$('#genreFour').click(function() {
	var a = $('.thriller');
	var b = $('.comedy');
	var c = $('.drama');
	var d = $('.action');
		a.hide(1000);
		b.hide(1000);
		c.hide(1000);
		d.show(1000);
})

 $('#allmovies').click(function() {
        location.reload();
    })