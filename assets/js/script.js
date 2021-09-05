var saveButtonIDs = ['#save09', '#save10', '#save11', '#save12', '#save13', '#save14', '#save15', '#save16' ,'#save17']
var saveButtonArray = []

var timeLabel = ['#09time', '#10time', '#11time', '#12time', '#13time', '#14time',
'#15time', '#16time', '#17time']
var textAreas = ['#09block', '#10block', '#11block', '#12block', '#13block', '#14block',
'#15block', '#16block', '#17block']
var timeTextList = []

// var saveButten = $('#save09');
// saveButten.on('click', saveToLocalStorage);

var myinput = []
//QUESTION: WHAT IS THE CORRECT WAY TO DO THIS WITH FUNCTION(EVENT, I)
// for (var i = 0; i < saveButtonIDs.length; i++) {
//     saveButtonArray[i] = $(saveButtonIDs[i])
//     saveButtonArray[i].on('click', function(event, i){
//         event.preventDefault()
//         myinput[i] = $(textAreas[i]).val()
//         localStorage.setItem("myinput" + i, JSON.stringify(myinput[i]))


//     })
// }

document.querySelectorAll('.saveBtn').forEach(function(el) {
    el.addEventListener('click', function(event){
        event.preventDefault()
        hourNumber = event.target.id.substring(4,6) //reference to that specific button
        hourBlock = "#" + hourNumber + "block"
        myinput[parseInt(hourNumber)-9] = $(hourBlock).val()
        localStorage.setItem("myinput" + (parseInt(hourNumber)-9), JSON.stringify(myinput[parseInt(hourNumber)-9]))
    })
})

var savedInfoArray = []
for (var i = 0; i < saveButtonIDs.length; i++){
    console.log(JSON.parse(localStorage.getItem("myinput" + i)))
    savedInfoArray[i] = JSON.parse(localStorage.getItem("myinput" + i))
    $(textAreas[i]).val(savedInfoArray[i])
}

var clearBtn = $('.clear-btn')
clearBtn.on('click', function(event) {
    localStorage.clear()
    for (var i = 0; i < saveButtonIDs.length; i++) {
        $(textAreas[i]).val("")
    }
})

$('#currentDay').text(moment().format("MMMM Do, YYYY"))



// function saveToLocalStorage(event) {
//     event.preventDefault()
//     // var text = $('textarea#mytextarea').val();
//     myinput = $('#09block').val();
//     localStorage.setItem('myinput', JSON.stringify(myinput))
//     // $("#comment").val()
// };
//allow the savedinfo to persist over time 
// var savedInfo = JSON.parse(localStorage.getItem("myinput"));
// $('#09block').val(savedInfo)

//allow for the textarea to change colors based on if the current hour 
//    is higher, lower or the same as the one in the cell next to it
var currentHour = moment().format('H')
// currentHour = 15;

for (var i = 0; i < timeLabel.length; i++){
    timeTextList[i] = $(timeLabel[i]).text()
    if (currentHour > textAreas[i].substring(1, 3)) { 
        $(textAreas[i]).attr('class', 'past')
    } else if (currentHour == textAreas[i].substring(1,3)) {
        $(textAreas[i]).attr('class', 'present')
    } else {   
        $(textAreas[i]).attr('class', 'future')
    }
}

//old code
var timeText = $('#12time').text()
if (currentHour > timeText.substring(0,2)) {
    $('#12block').attr('class', 'past')
} else if (currentHour == timeText.substring(0,2)) {
    $('#12block').attr('class', 'present')
} else {   
    $('12block').attr('class', 'future')
}