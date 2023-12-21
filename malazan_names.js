/*navbar dropdown*/
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/*basic JavaScript debounce function as taken from Underscore.js*/
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
			console.log( "Handler for `debounce` called." );

		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}; 

/*filter search for multiple parameters, taken from somewhere on stackoverflow*/
$('#search').on( "keyup",debounce( function(){
	  	console.log( "Start after debouncing."	);

  var $rows = $('#table tr');
  var Values = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
    reg = RegExp(Values, 'i'),
    text;
	  	console.log( "Regular expression created."	);

  $rows.show().filter(function() {
    text = $(this).text().replace(/\s+/g, ' ');
    return !reg.test(text);
  }).hide();
  	  	console.log( "Search filter."	);


},800));
