var currentDate = dayjs().format('dddd, MMMM DD YYYY');
console.log(currentDate);

var currentHour = dayjs().format('h');

var currentMinute = dayjs().format('mm');

var current12 = dayjs().format('A');

$('#currentDay').text(currentHour + ":" + currentMinute + " " + currentDate);

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

for (var i = 0; i < timeBlocks.length; i++) {
    var row = $('<div>')
    row.attr('class', 'row');
    $('.container').append(row);
}

var columnWidths = [2, 8, 2];

for (var i = 0; i < columnWidths.length; i++) {
    var col = $('<div>');
    col.attr('class', columnWidths[i]);
    $('.row').append(col);
}

