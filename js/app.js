$(document).ready(function () {
	let initialLocaleCode = 'uk';

	$('#calendar').fullCalendar({
		defaultDate: '2017-07-17',
		locale: initialLocaleCode,
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

	// build the locale selector's options
	$.each($.fullCalendar.locales, function (localeCode) {
		$('#locale-selector').append(
			$('<option/>')
			.attr('value', localeCode)
			.prop('selected', localeCode == initialLocaleCode)
			.text(localeCode)
		);
	});

	// when the selected option changes, dynamically change the calendar option
	$('#locale-selector').on('change', function () {
		if (this.value) {
			$('#calendar').fullCalendar('option', 'locale', this.value);
		}
	});

});