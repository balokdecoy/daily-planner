// Set default variables
var currentDate = dayjs().format('dddd, DD MMMM YYYY');
var currentHour = dayjs().format('h');
var testHour = dayjs().hour();
var currentMinute = dayjs().format('mm');
var current12 = dayjs().format('A');
var currentEvents = [];

// Display the current time and date
$('#currentDay').text(currentHour + ":" + currentMinute + current12 + " " + currentDate);

// Set local storage to currentEvents array
init();

if (localStorage.Recorded != currentDate) {
    clearStorage();
}

// Timeblock array holding an object for each workday hour
var timeBlocks = [
    {
        time: 8,
        showTime: '8AM',
        hourEvent: '',
    },
    {
        time: 9,
        showTime: '9AM',
        hourEvent: '',
    },
    {
        time: 10,
        showTime: '10AM', 
        hourEvent: '',
    },
    {
        time: 11,
        showTime: '11AM',
        hourEvent: '',
    },
    {
        time: 12,
        showTime: '12PM',
        hourEvent: '',
    },
    {
        time: 13,
        showTime: '1PM',
        hourEvent: '',
    },
    {
        time: 14,
        showTime: '2PM',
        hourEvent: '',
    },
    {
        time: 15,
        showTime: '3PM',
        hourEvent: '',
    },
    {
        time: 16,
        showTime: '4PM',
        hourEvent: '',
    },
    {
        time: 17,
        showTime: '5PM',
        hourEvent: '',
    },
    {
        time: 18,
        showTime: '6PM',
        hourEvent: '',
    },
]

// Create rows to hold timeblock columns
for (var i = 0; i < timeBlocks.length; i++) {
    var row = $('<div>');
    row.attr('class', 'row');
    $('.container').append(row);
    for (var p = 0; p < 3; p++) {
        if (p === 0) {
            var timeDisplay = $('<div>');
            timeDisplay.text(timeBlocks[i].showTime);
            timeDisplay.attr('class', 'col-2 time-block hour');
        }
        else if (p === 1) {
            var planner = $('<textarea>');
            var event;
            planner.attr('class', 'col-8 description');
            planner.attr('style', 'color: black');
            planner.attr('id', 'anEvent');
            if (testHour === timeBlocks[i].time) {
                $(planner).addClass('present');
            }
            else if (testHour < timeBlocks[i].time) {
                $(planner).addClass('future');
            }
            else {
                $(planner).addClass('past');
            }
        }
        else if (p === 2) {
            var save = $('<button>');
            save.attr('class', 'col-2 saveBtn fas fa-save fa-4x fa-fw');
        }
    }
    // Send column detail to each row
    $(row).append(timeDisplay, planner, save);
}

// Check for storedEvents in local storage and add to currentEvents array
function init() {
    var storedEvents = JSON.parse(localStorage.getItem("Planner", "Recorded"));

    if (storedEvents !== null) {
        currentEvents = storedEvents;
    }
}

// Send currentEvents array to local storage
function storeEvents() {
    localStorage.setItem("currentEvents", JSON.stringify(currentEvents));
}

// Button to clear local storage and delete past events from page
function clearStorage () {
    localStorage.clear();
}

// Event listener
$('button').on('click', function(event) {
    event.preventDefault();
    var thisBtn = this.value;
    var thisEvent = $(this).prev().val();
    currentEvents.push(thisEvent, currentDate);
    localStorage.setItem("Planner", JSON.stringify(currentEvents));
    localStorage.setItem("Recorded", currentDate);
})