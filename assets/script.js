// Set default variables
var currentDate = dayjs().format('dddd, DD MMMM YYYY');
var currentHour = dayjs().format('h');
var testHour = dayjs().hour();
var currentMinute = dayjs().format('mm');
var current12 = dayjs().format('A');
var currentEvents = [];

// Display the current time and date
$('#currentDay').text(currentHour + ':' + currentMinute + current12 + ' ' + currentDate);

// Set clear events button text
$('#clearEvents').text('Clear Events');

// Button to erase all events at user discretion
$('#clearEvents').on('click', function (event) {
    localStorage.clear();
    $('textarea').val('');
})

// Timeblock array holding an object for each workday hour
var timeBlocks = [
    {
        time: 8,
        showTime: '8AM',
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
    var row = $('<div>');
    row.attr('class', 'row');
    $('.container').append(row);
    // Create time columns
    for (var p = 0; p < 3; p++) {
        if (p === 0) {
            var timeDisplay = $('<div>');
            timeDisplay.text(timeBlocks[i].showTime);
            timeDisplay.attr('class', 'col-2 time-block hour');
        }
        // Create columns for user event textarea 
        else if (p === 1) {
            var planner = $('<textarea>');
            var thisEvent = localStorage.getItem(timeBlocks[i].showTime);
            planner.val(thisEvent);
            planner.attr('class', 'col-8 description');
            planner.attr('style', 'color: black');
            // Color code textarea based on current time
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
        // Create columns for save button calling Font Awesome image
        else if (p === 2) {
            var save = $('<button>');
            save.val(i);
            save.attr('class', 'col-2 saveBtn fas fa-save fa-4x fa-fw');
        }
    }
    // Send column detail to each row
    $(row).append(timeDisplay, planner, save);
}

// Event listener, store events to local storage
$('.saveBtn').on('click', function(event) {
    event.preventDefault();
    var thisEvent = $(event.target).prev('textarea').val();
    var thisTime = $(event.target).prev().prev().text();
    var recordDate = currentDate;
    localStorage.setItem(thisTime, thisEvent);
    localStorage.setItem(recordDate, currentDate);
})