/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/*var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
*/

//Location content
var lc;
//PhoneGap Ready variable
var pgr = false;
var path = '';

window.addEventListener('load', function () {
    document.addEventListener("deviceReady", onDeviceReady, false);
}, false);

function onDeviceReady() {
    try {
        //Get a handle we'll use to adjust the accelerometer
        //content
        lc = document.getElementById("locationInfo");
        //Set the variable that lets other parts of the program
        //know that PhoneGap is initialized
        pgr = true;
    }
    catch (ex) {
        alert("deviceReady error: "+ex.message);
    }
}


/*************************** EXIT APP - INI ***************************/
function exitApp() {
    navigator.app.exitApp();
}
/*************************** EXIT APP - END ***************************/

function verCalendario() {
    alert('entra en viewCalendar');

    // prep some variables
    var startDate = new Date("September 24, 2013 13:00:00");
    alert(startDate);
    var endDate = new Date("September 24, 2013 14:30:00");
    alert(endDate);
    var title = "My nice event";
    var location = "Home";
    var notes = "Some notes about this event.";
    alert(notes);
    var success = function(message) { alert("Success: " + JSON.stringify(message)); };
    var error = function(message) { alert("Error: " + message); };

    // create a calendar (iOS only for now)
    alert('antes de createCalendar');
    //window.plugins.calendar.createCalendar(calendarName,onSuccess,onError);

    //function(title, location, notes, startDate, endDate, successCallback, errorCallback) {
    //window.plugins.createEvent(title, location, notes, startDate, endDate, successCallback, errorCallback);
    window.plugins.calendar.createEvent(title, location, notes, startDate, endDate, onSuccess, onError);
    alert('después de createCalendar');

}


/*************************** LABEL SUCCESS/ERROR - INI ***************************/
// onSuccess Callback
//
function onSuccess(action) {
    console.log(action + " :Audio Success");
}

// onError Callback
//
function onError(error) {
    if (error >0){
        alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
    }
}
/*************************** LABEL SUCCESS/ERROR - END ***************************/
