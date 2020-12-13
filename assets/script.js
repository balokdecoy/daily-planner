var currentDate = dayjs().format('dddd, MMMM DD YYYY');
var currentHour = dayjs().format('h');
var currentMinute = dayjs().format('mm');
var current12 = dayjs().format('A');
var columnWidths = [2, 8, 2];
var columnNumber = 0;

$('#currentDay').text(currentHour + ":" + currentMinute + " " + currentDate);

// Timeblock array holding an object for each workday hour
var timeBlocks = [
    {
        time: 9,
        status: '',
    },
    {
        time: 10,
        status: '',
    },
    {
        time: 11,
        status: '',
    },
    {
        time: 12,
        status: '',
    },
    {
        time: 13,
        status: '',
    },
    {
        time: 14,
        status: '',
    },
    {
        time: 15,
        status: '',
    },
    {
        time: 16,
        status: '',
    },
    {
        time: 17,
        status: '',
    },
]

// Create rows to hold each timeblock
for (var i = 0; i < timeBlocks.length; i++) {
    var row = $('<div>')
    row.attr('class', 'row');
    $('.container').append(row);
}

// Create columns nested within each timeblock row
for (var i = 0; i < columnWidths.length; i++) {
    var col = $('<div>');
     if (columnNumber === 0) {
        col.attr('class', "col-" + columnWidths[i]);
        col.addClass('timeblock');
        col.addClass('hour');
    }
    if (columnNumber === 1) {
        var col = $('<textarea>');
        col.attr('class', 'col-' + columnWidths[i]);
        col.addClass('description');
        col.addClass('past');
    }
    if (columnNumber === 2) {
        col.attr('class', 'col-' + columnWidths[i]);
        col.addClass('saveBtn');
    }
    $('.row').append(col);
    columnNumber++
   
}
