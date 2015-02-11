var calendarPlugin = {
    createEvent: function(title, location, notes, startDate, endDate, successCallback, errorCallback) {
        alert('js:calendarPlugin title: ' + title );
        try{
            alert('entra try');
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
        catch (ex) {
            alert("calendarPlugin.createEvent error: "+ex.message);
        }

     }
}
module.exports = calendarPlugin;