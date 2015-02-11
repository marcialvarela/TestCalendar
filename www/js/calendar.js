var calendarPlugin = {
    createEvent: function(title, location, notes, startDate, endDate, successCallback, errorCallback) {
        alert('js:calendarPlugin title: ' + title );
        cordova.exec(
            successCallback,
            errorCallback,
            'calendarPlugin',
            'addCalendarEntry',
            [{
                "title": title,
                "description": notes,
                "eventLocation": location,
                "startTimeMillis": startDate.getTime(),
                "endTimeMillis": endDate.getTime()
            }]
        );
        alert('js:pasa cordova.exec');
     }
}
module.exports = calendarPlugin;