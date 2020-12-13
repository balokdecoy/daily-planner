// Set default variables
var currentDate = dayjs().format('dddd, DD MMMM YYYY');
var currentHour = dayjs().format('h');
var testHour = dayjs().hour();
var currentMinute = dayjs().format('mm');
var current12 = dayjs().format('A');
var currentEvents = [];

// Display the current time and date
$('#currentDay').text(currentHour + ":" + currentMinute + " " + currentDate);

// Set local storage to currentEvents array
init();

// Timeblock array holding an object for each workday hour
var timeBlocks = [
    {
        time: 8,
        showTime: '8AM',
        dayEvent: '',
    },
    {
        time: 9,
        showTime: '9AM',
    },
    {
        time: 10,
        showTime: '10AM', 
    },
    {
        time: 11,
        showTime: '11AM',
    },
    {
        time: 12,
        showTime: '12PM',
    },
    {
        time: 13,
        showTime: '1PM',
    },
    {
        time: 14,
        showTime: '2PM',
    },
    {
        time: 15,
        showTime: '3PM',
    },
    {
        time: 16,
        showTime: '4PM',
    },
    {
        time: 17,
        showTime: '5PM',
    },
    {
        time: 18,
        showTime: '6PM',
    },
]

// Create rows to hold timeblock columns
for (var i = 0; i < timeBlocks.length; i++) {
    var row = $('<form>');
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
    var storedEvents = JSON.parse(localStorage.getItem("storedEvents"));

    if (storedEvents !== null) {
        currentEvents = storedEvents;
    }
    console.log(currentEvents);
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
$('button').click(function() {
      alert('button');
})
