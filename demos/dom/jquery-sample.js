$(document).ready(function () {
	$.ajax({
		method: 'GET',
		url: 'http://localhost:3000/people'
	})
	.done (function (data) {
		$.each(data, function (key, value) {
			var domString = '<tr>'
						  + '	<td>' + value.id + '</td>'
						  + '	<td>' + value.first_name + '</td>'
						  + '   <td>' + value.last_name + '</td>'
						  + '</tr>';

			$('#peopleTable').append(domString);
		});
	});
});
