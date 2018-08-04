jQuery.ajax({
	url: '/path/to/file',
	type: 'POST',
	dataType: 'xml/html/script/json/jsonp',
	data: { param1: 'value1' },
	complete: function(xhr, textStatus) {
		// called when complete
	},
	success: function(data, textStatus, xhr) {
		// called when successful
	},
	error: function(xhr, textStatus, errorThrown) {
		// called when there is an error
	}
})

jQuery.ajax = function(
	url,
	{
		async = true,
		beforeSend = function() {},
		cache = true,
		complete = function() {},
		crossDomain = false,
		global = true
		// ... more config
	}
) {
	// ... do stuff
}
// Avoid writing in functions
// var foo = config.foo || 'default foo';
