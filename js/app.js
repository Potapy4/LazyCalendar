$(document).ready(function () {
	$('#calendar').fullCalendar({
		defaultDate: '2017-07-17',
		navLinks: false, // can't click day/week names to navigate views
		editable: true, // just for show cursor
		events: eventData, // read from local JSON file
		eventClick: function (calEvent) {

			// Initialize
			$('#event-date').text(calEvent.title);
			$('#event-time').text(calEvent.start);
			$('#event-description').text(calEvent.description);

			$('.ui.modal')
				.modal('show');
		}
	});

});