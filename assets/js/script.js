// Comments show the vanilla JavaScript equivalent statements

// var rootEl = document.getElementById("root");
var saveButten = $('#butten');
var firstNameEl = $('input[name="first-name"]');

// Submit event on the form
saveButten.on('click', saveToLocalStorage);

function saveToLocalStorage(event) {
    event.preventDefault()
    // var text = $('textarea#mytextarea').val();
    var myinput = $('#w3review').val();
    console.log(myinput)
    localStorage.setItem('myinput', JSON.stringify(myinput))
    // $("#comment").val()
};

//allow the savedinfo to persist over time 
var savedInfo = JSON.parse(localStorage.getItem("myinput"));
$('#w3review').val(savedInfo)

//allow for the moment stuff to work better 
var currentHour = moment().format('H')
console.log(currentHour)
console.log($('#12pm').text())
var timeText = $('#12pm').text()
if (currentHour > timeText.substring(0,2)) {
    $("img").attr("width","500");
}