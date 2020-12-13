// Set default variables
var currentDate = dayjs().format('dddd, DD MMMM YYYY');
var currentHour = dayjs().format('h');
var testHour = dayjs().hour();
var currentMinute = dayjs().format('mm');
var current12 = dayjs().format('A');

// Display the current time and date
$('#currentDay').text(currentHour + ":" + currentMinute + " " + currentDate);

// Timeblock array holding an object for each workday hour
var timeBlocks = [
    {
        time: 8,
        status: '',
        showTime: '8AM',
    },
    {
        time: 9,
        status: '',
        showTime: '9AM',
    },
    {
        time: 10,
        status: '',
        showTime: '10AM', 
    },
    {
        time: 11,
        status: '',
        showTime: '11AM',
    },
    {
        time: 12,
        status: '',
        showTime: '12PM',
    },
    {
        time: 13,
        status: '',
        showTime: '1PM',
    },
    {
        time: 14,
        status: '',
        showTime: '2PM',
    },
    {
        time: 15,
        status: '',
        showTime: '3PM',
    },
    {
        time: 16,
        status: '',
        showTime: '4PM',
    },
    {
        time: 17,
        status: '',
        showTime: '5PM',
    },
    {
        time: 18,
        status: '',
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
            planner.attr('class', 'col-8 description');
            if (testHour === timeBlocks[i].time) {
                $(planner).addClass('present');
            }
            else if (testHour < timeBlocks[i].time) {
                $(planner).addClass('past');
            }
            else {
                $(planner).addClass('future');
            }
        }
        else if (p === 2) {
            var save = $('<i>');
            save.attr('class', 'col-2 saveBtn fas fa-save fa-4x fa-fw');
        }
    }
    // Send column detail to each row
    $(row).append(timeDisplay, planner, save);
}

console.log(testHour);
console.log(parseInt($('#id').val()))
