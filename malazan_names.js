function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function debounce(func, ms) {
  let timeoutId;

  return function newFunc(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, ms, ...args);
  }
}

$('#search').keyup(function() {

  var $rows = $('#table tr');
  var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
    reg = RegExp(val, 'i'),
    text;

  $rows.show().filter(function() {
    text = $(this).text().replace(/\s+/g, ' ');
    return !reg.test(text);
  }).hide();

});
