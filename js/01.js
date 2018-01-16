$(() => {
	$('h3.poem-title').click(function()
	{
	$('div.poem-stanza').addClass('highlight')
	$("#" + $(this).attr("id) + " div.poem-stanza").addClass('highlight');

	});
}); 