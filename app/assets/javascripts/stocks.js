var init_stock_lookup;

init_stock_lookup = function(){
$('#stock-lookup-form').on('ajax:before', function(evebt, data, status){
	show_spinner();
});

$('#stock-lookup-form').on('ajax:after', function(evebt, data, status){
	hide_spinner();
});

$('#stock-lookup-form').on('ajax:success', function(event, data, status){
$('#stock-lookup').replaceWith(data);
init_stock_lookup();
});


$('#stock-lookup-form').on('ajax:error', function(event, xhr, status, error){0
  	hide_spinner();
  $('#stock-lookup-results').replaceWith(' ');
  $('#stock-lookup-errors').replaceWith('Stock was not found.');
});

}



/* Pre-Java */
$(document).ready(function() {
init_stock_lookup();
})
